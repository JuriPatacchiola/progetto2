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

// CORREZIONE: Il tipo deve essere riferito al componente, non al meta
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: "Badge", // Passiamo il testo come prop children
    },
};

export const Lungo: Story = {
    args: {
        children: "Testo del badge molto più lungo per testare lo spazio",
    },
};