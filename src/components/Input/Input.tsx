import React, { useId, useState } from "react";
import "../../styles/variables.css";
import "./input.css";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: React.ReactNode;
    kind?: "text" | "password" | "email";
    icon?: React.ReactNode;
    error?: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: React.ReactNode;
    options: { label: React.ReactNode; value: string }[];
}

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: React.ReactNode;
    options: { label: React.ReactNode; value: string }[];
    name: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, id, kind = "text", icon, error: externalError, disabled, ...props }) => {
    const generatedId = useId();
    const defaultId = id || generatedId;
    const [inputValue, setInputValue] = useState("");
    const [internalError, setInternalError] = useState("");

    // Se scriviamo un errore in Storybook, vince quello. Altrimenti usa la validazione email.
    const currentError = externalError || internalError;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputValue(val);

        // RIPRISTINATA: Validazione Email Real-time
        if (kind === "email") {
            if (val.length > 0 && !val.includes("@")) {
                setInternalError("Email non valida");
            } else {
                setInternalError("");
            }
        }
        if (props.onChange) props.onChange(e);
    };

    return (
        <div className={`input-group ${disabled ? "is-disabled" : ""}`}>
            <div className="input-container">
                <label htmlFor={defaultId} className="input-label">{label}</label>
                <div className="input-wrapper">
                    <input
                        id={defaultId}
                        type={kind}
                        value={inputValue}
                        onChange={handleChange}
                        disabled={disabled}
                        className={`input-field ${currentError ? "is-error" : ""} ${icon ? "with-icon" : ""}`}
                        {...props}
                    />
                    {icon && <div className="input-icon-container">{icon}</div>}
                </div>
            </div>
            {currentError && <span className="error-text">{currentError}</span>}
        </div>
    );
};

export const Select: React.FC<SelectProps> = ({ label, id, options, disabled, ...props }) => {
    const defaultId = id || useId();
    return (
        <div className={`input-container-simple ${disabled ? "is-disabled" : ""}`}>
            <label htmlFor={defaultId} className="input-label">{label}</label>
            <select id={defaultId} className="input-field" disabled={disabled} {...props}>
                {options.map((opt, index) => (
                    <option key={index} value={opt.value}>{String(opt.label)}</option>
                ))}
            </select>
        </div>
    );
};

export const RadioGroup: React.FC<RadioProps> = ({ label, name, options, disabled, ...props }) => {
    const generatedId = useId();
    return (
        <div className={`input-container-simple ${disabled ? "is-disabled" : ""}`}>
            <label className="input-label">{label}</label>
            <div className="radio-group-container">
                {options.map((opt, index) => {
                    const optionId = `${generatedId}-${index}`;
                    return (
                        <div key={index} className="radio-item">
                            <input type="radio" id={optionId} name={name} value={opt.value} disabled={disabled} {...props} />
                            <label htmlFor={optionId} className="radio-label">{opt.label}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};