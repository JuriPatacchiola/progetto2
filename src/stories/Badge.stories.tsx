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


export const Default: Story = {
    args: {
        children: "Badge",
        variant: "positive",
    },
};


export const Lungo: Story = {
    args: {
        children: "Testo del badge molto più lungo per testare lo spazio",
    },
};


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