import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
    title: "Atoms/Spacing",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<Record<string, never>>;




const SpaceCalc = ({ value }: { value: string }) => {
    const spacing = React.useMemo(() => {
        const bodyStyle = window.getComputedStyle(document.body);
        const val = bodyStyle.getPropertyValue(value).trim();
        return val;
    }, [value]);

    const hasValue = spacing !== "" && spacing !== "0" && spacing !== "0px";

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>

            <span style={{ minWidth: '45px', display: 'inline-block' }}>
                {spacing || "0"}
            </span>

            {hasValue && (
                <div
                    style={{
                        width: spacing,
                        height: '14px',
                        backgroundColor: '#007bff',
                        borderRadius: '2px',
                        opacity: 0.7,
                        border: '1px solid #0056b3'
                    }}
                />
            )}
        </div>
    );
};




const CustomStyle = () => (
    <style>
        {`
        .spacing-table {
            width: 100%;
            min-width: 450px;
            border-collapse: collapse;
            font-family: sans-serif;
        }
        .spacing-table th {
            text-align: left;
            background: #f8f9fa;
            padding: 12px;
            border-bottom: 2px solid #dee2e6;
            color: #495057;
        }
        .spacing-table td {
            padding: 12px;
            border-bottom: 1px solid #eee;
            vertical-align: middle;
        }
        .token-name {
            font-weight: bold;
            color: #d63384; /* Colore tipico dei token nei design system */
        }
        `}
    </style>
);

export const Default: Story = {
    render: () => (
        <>
            <CustomStyle />
            <table className="spacing-table">
                <thead>
                    <tr>
                        <th>Nome Token</th>
                        <th>Variabile CSS</th>
                        <th>Valore Calcolato</th>
                    </tr>
                </thead>
                <tbody>
                    {["zero", "xs", "sm", "md", "lg", "xl"].map((key) => (
                        <tr key={key}>
                            <td><span className="token-name">{key}</span></td>
                            <td><code>{`var(--spacing-${key})`}</code></td>
                            <td>
                                <code>
                                    <SpaceCalc value={`--spacing-${key}`} />
                                </code>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    ),
};