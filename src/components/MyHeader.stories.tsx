import type { Meta, StoryObj } from '@storybook/react';
import { MyHeader } from './MyHeader';

const meta: Meta<typeof MyHeader> = {
    title: 'Componenti/MyHeader',
    component: MyHeader,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof MyHeader>;

export const ConNavigazione: Story = {
    args: {
        title: 'Progetto Due',
        links: [
            { label: 'Home', href: '/' },
            { label: 'Servizi', href: '/services' },
            { label: 'Contatti', href: '/contact' },
        ],
    },
};

export const SenzaLink: Story = {
    args: {
        title: 'Solo Logo',
        links: [],
    },
};