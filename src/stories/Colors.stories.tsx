import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
    title: "Atoms/Colors"
};
export default meta

type Story = StoryObj<typeof meta>;
export const primary: Story = {
    render: () => {
        // Definiamo i pesi che abbiamo nel :root
        const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

        // Definiamo le palette che vogliamo mostrare
        const palettes = [
            { name: "Gray", prefix: "gray" },
            { name: "Red", prefix: "red" },
            { name: "Green", prefix: "green" }
        ];

        return (
            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <style>
                    {`
                    .color-section {
                        margin-bottom: 40px;
                    }
                    .grid-container {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                        gap: 12px;
                        margin-top: 16px;
                    }
                    .color-swatch {
                        height: 80px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        border-radius: 8px;
                        border: 1px solid var(--gray-200, #eee);
                        font-size: 0.75rem;
                        font-weight: bold;
                        transition: transform 0.2s;
                    }
                    .color-swatch:hover {
                        transform: scale(1.05);
                    }
                    .label {
                        margin-top: 4px;
                        opacity: 0.8;
                    }
                    `}
                </style>

                <h1>System Colors</h1>

                {palettes.map((palette) => (
                    <div key={palette.name} className="color-section">
                        <h2>{palette.name}</h2>
                        <div className="grid-container">
                            {weights.map((weight) => (
                                <div
                                    key={`${palette.prefix}-${weight}`}
                                    className="color-swatch"
                                    style={{
                                        // Applichiamo la variabile CSS dinamica
                                        backgroundColor: `var(--${palette.prefix}-${weight})`,
                                        // Cambiamo colore del testo in base alla luminosità
                                        color: weight > 500 ? 'white' : 'black'
                                    }}
                                >
                                    <span>{weight}</span>
                                    <span className="label">--{palette.prefix}-{weight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}