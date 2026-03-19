import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from './MyButton';

const meta: Meta<typeof MyButton> = {
    title: 'Componenti/MyButton',
    component: MyButton,
    tags: ['autodocs'],
    parameters: {
        // Questa riga centra il componente nel Canvas
        layout: 'centered',
    },
    argTypes: {
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
    args: {
        label: 'Bottone Principale',
        variant: 'primary',
    },
};

export const Danger: Story = {
    args: {
        label: 'Elimina',
        variant: 'danger',
        size: 'large',
    },
};

export const SmallSecondary: Story = {
    args: {
        label: 'Piccolo',
        variant: 'secondary',
        size: 'small',
    },
};