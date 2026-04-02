import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, Select, TextInput } from "../components/Input/Input";

const SendIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

const meta: Meta<typeof TextInput> = {
    title: "Forms/InputComponents",
    component: TextInput,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {
        kind: { control: "inline-radio", options: ["text", "email", "password"] },
        disabled: { control: "boolean" },
        error: { control: "text" },
        icon: {
            options: ["Nessuna", "Invia"],
            mapping: { "Nessuna": null, "Invia": SendIcon },
            control: { type: "select" },
        },
    },
};

export default meta;

// 1. Storia principale con validazione email attiva
export const EmailValidazione: StoryObj<typeof TextInput> = {
    args: {
        label: "Email",
        kind: "email",
        placeholder: "Scrivi senza @...",
        icon: "Invia" as any,
        disabled: false,
        error: "",
    },
};

// 2. Storia Select (Usiamo any per evitare errori di tipo nel file storie)
export const Selezione: any = {
    render: (args: any) => <Select {...args} />,
    args: {
        label: "Paese",
        disabled: false,
        options: [
            { label: "Italia", value: "it" },
            { label: "Francia", value: "fr" },
        ],
    },
    argTypes: {
        kind: { table: { disable: true } },
        icon: { table: { disable: true } },
        error: { table: { disable: true } },
    },
};

// 3. Storia Radio
export const SceltaRadio: any = {
    render: (args: any) => <RadioGroup {...args} />,
    args: {
        label: "Opzioni",
        name: "test_radio",
        disabled: false,
        options: [
            { label: "A", value: "a" },
            { label: "B", value: "b" },
        ],
    },
    argTypes: {
        kind: { table: { disable: true } },
        icon: { table: { disable: true } },
        error: { table: { disable: true } },
    },
};