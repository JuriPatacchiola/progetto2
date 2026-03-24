import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge/Badge";

const meta: Meta<typeof Badge> = {
    title: "Componenti/Badge",
    component: Badge,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof Badge>;

// 1. Storia di base
export const Default: Story = {
    args: {
        children: "Badge",
        variant: "neutral",
    },
};

// 2. Storia con testo lungo
export const Lungo: Story = {
    args: {
        children: "Testo del badge molto più lungo per testare lo spazio",
    },
};

// --- QUESTA È LA PARTE DA SOSTITUIRE/AGGIUNGERE ---
// 3. Storia "Galleria" per vederli tutti insieme e testare l'hover
export const Galleria: Story = {
    render: () => (
        <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            padding: '20px'
        }}>
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="negative">Negative</Badge>
            <Badge variant="positive">Positive</Badge>
        </div>
    ),
};