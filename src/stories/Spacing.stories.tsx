import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
    title: "Atoms/DesignSystem",
    parameters: {
        layout: "padded" // "padded" è meglio per tabelle larghe rispetto a "centered"
    },
    tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<Record<string, never>>;

// --- COMPONENTI DI UTILITÀ ---

/**
 * Calcola il valore reale (pixel) di una variabile CSS a runtime
 */
const ComputedValue = ({ variable }: { variable: string }) => {
    const [val, setVal] = React.useState("...");

    React.useEffect(() => {
        // Un piccolo timeout assicura che il CSS sia stato iniettato da Storybook
        const timer = setTimeout(() => {
            const bodyStyle = window.getComputedStyle(document.body);
            const computed = bodyStyle.getPropertyValue(variable).trim();
            setVal(computed || "non definita");
        }, 100);
        return () => clearTimeout(timer);
    }, [variable]);

    return <code>{val}</code>;
};

/**
 * Mostra lo stato del font attivo nel browser
 */
const FontInspector = () => {
    const [info, setInfo] = React.useState({ family: "Loading...", size: "" });

    React.useEffect(() => {
        const style = window.getComputedStyle(document.body);
        setInfo({
            family: style.fontFamily,
            size: style.fontSize
        });
    }, []);

    return (
        <div style={{
            marginBottom: '32px',
            padding: '24px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px'
        }}>
            <h2 style={{ marginTop: 0, fontSize: '1.25rem' }}>Stato Tipografia</h2>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <div>
                    <p style={{ margin: '4px 0' }}><strong>Font Family rilevata:</strong></p>
                    <code style={{ color: '#d63384', fontSize: '1.1rem' }}>{info.family}</code>
                </div>
                <div style={{ flex: 1, paddingLeft: '20px', borderLeft: '2px solid #e2e8f0' }}>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Anteprima Testo (Nunito)</p>
                    <p style={{ margin: 0, fontSize: '1.5rem' }}>
                        Abcdefg 12345 - La volpe veloce salta sul cane pigro.
                    </p>
                </div>
            </div>
        </div>
    );
};

const CustomStyle = () => (
    <style>
        {`
        .ds-table {
            width: 100%;
            border-collapse: collapse;
            font-family: inherit;
            margin-bottom: 40px;
        }
        .ds-table th {
            text-align: left;
            background: #f1f5f9;
            padding: 12px 16px;
            border-bottom: 2px solid #cbd5e1;
            color: #475569;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .ds-table td {
            padding: 16px;
            border-bottom: 1px solid #f1f5f9;
            vertical-align: middle;
        }
        .token-name {
            font-weight: bold;
            color: #d63384;
            font-family: monospace;
        }
        .preview-box {
            background: #007bff;
            height: 16px;
            border-radius: 2px;
            opacity: 0.7;
        }
        `}
    </style>
);

// --- STORY RENDER ---

export const Default: Story = {
    render: () => (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <CustomStyle />

            <FontInspector />

            {/* TABELLA TIPOGRAFIA */}
            <h3 style={{ borderLeft: '4px solid #007bff', paddingLeft: '12px' }}>Font Sizes (Scale)</h3>
            <table className="ds-table">
                <thead>
                    <tr>
                        <th>Livello</th>
                        <th>Token / Variabile</th>
                        <th>Valore (REM/PX)</th>
                        <th>Anteprima Visiva</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { label: "Hero", var: "--font-size-hero" },
                        { label: "H1", var: "--font-size-h1" },
                        { label: "H2", var: "--font-size-h2" },
                        { label: "H3", var: "--font-size-h3" },
                        { label: "H4", var: "--font-size-h4" },
                        { label: "H5", var: "--font-size-h5" },
                        { label: "H6", var: "--font-size-h6" },
                        { label: "Base", var: "--font-size-base" },
                        { label: "Small", var: "--font-size-sm" },
                        { label: "Extra Small", var: "--font-size-xs" },
                    ].map((item) => (
                        <tr key={item.var}>
                            <td><strong>{item.label}</strong></td>
                            <td><span className="token-name">{item.var}</span></td>
                            <td><ComputedValue variable={item.var} /></td>
                            <td>
                                <span style={{ fontSize: `var(${item.var})`, lineHeight: '1', display: 'block' }}>
                                    Ag
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* TABELLA SPACING */}
            <h3 style={{ borderLeft: '4px solid #007bff', paddingLeft: '12px' }}>Spacing System</h3>
            <table className="ds-table">
                <thead>
                    <tr>
                        <th>Token</th>
                        <th>Variabile</th>
                        <th>Valore</th>
                        <th>Rappresentazione</th>
                    </tr>
                </thead>
                <tbody>
                    {["zero", "xs", "sm", "md", "lg", "xl"].map((key) => (
                        <tr key={key}>
                            <td><strong>{key.toUpperCase()}</strong></td>
                            <td><span className="token-name">{`--spacing-${key}`}</span></td>
                            <td><ComputedValue variable={`--spacing-${key}`} /></td>
                            <td style={{ width: '200px' }}>
                                <div className="preview-box" style={{ width: `var(--spacing-${key})` }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ),
};