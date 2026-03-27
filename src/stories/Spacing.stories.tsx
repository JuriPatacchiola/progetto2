import type { Meta, StoryObj } from "@storybook/react";
import React from "react";


interface DesignSystemProps {
    sampleText: string;
}

const meta: Meta<DesignSystemProps> = {
    title: "Atoms/DesignSystem",
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],

    argTypes: {
        sampleText: {
            name: "Testo Anteprima",
            control: "text",
            description: "Scrivi qui per testare le dimensioni del font",
        },
    },
};

export default meta;

type Story = StoryObj<DesignSystemProps>;



const ComputedValue = ({ variable }: { variable: string }) => {
    const [val, setVal] = React.useState("...");
    React.useEffect(() => {
        const timer = setTimeout(() => {
            const bodyStyle = window.getComputedStyle(document.body);
            const computed = bodyStyle.getPropertyValue(variable).trim();
            setVal(computed || "non definita");
        }, 150);
        return () => clearTimeout(timer);
    }, [variable]);
    return <code>{val}</code>;
};

const CustomStyle = () => (
    <style>
        {`
        .ds-table { width: 100%; border-collapse: collapse; margin-bottom: 40px; font-family: sans-serif; }
        .ds-table th { text-align: left; background: #f1f5f9; padding: 12px 16px; border-bottom: 2px solid #cbd5e1; color: #475569; font-size: 0.875rem; }
        .ds-table td { padding: 16px; border-bottom: 1px solid #f1f5f9; vertical-align: middle; }
        .token-name { font-weight: bold; color: #d63384; font-family: monospace; }
        .preview-box { background: #007bff; height: 16px; border-radius: 2px; opacity: 0.7; }
        `}
    </style>
);



const DesignSystemShowcase = ({ sampleText }: DesignSystemProps) => {
    const fontSizes = [
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
    ];

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <CustomStyle />

            <h3 style={{ borderLeft: '4px solid #007bff', paddingLeft: '12px', marginBottom: '24px' }}>
                Typography Scale Table
            </h3>

            <table className="ds-table">
                <thead>
                    <tr>
                        <th>Livello</th>
                        <th>Variabile</th>
                        <th>Valore Calcolato</th>
                        <th>Anteprima Visiva</th>
                    </tr>
                </thead>
                <tbody>
                    {fontSizes.map((item) => (
                        <tr key={item.var}>
                            <td><strong>{item.label}</strong></td>
                            <td><span className="token-name">{item.var}</span></td>
                            <td><ComputedValue variable={item.var} /></td>
                            <td style={{ maxWidth: '400px' }}>
                                <span style={{
                                    fontSize: `var(${item.var})`,
                                    lineHeight: '1.2',
                                    display: 'block',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {sampleText}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 style={{ borderLeft: '4px solid #007bff', paddingLeft: '12px', marginTop: '40px' }}>
                Spacing System
            </h3>
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
    );
};



export const Default: Story = {

    args: {
        sampleText: "Nunito Font Preview",
    },
    render: (args) => <DesignSystemShowcase {...args} />,
};