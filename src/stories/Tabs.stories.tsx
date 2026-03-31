import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import root from 'react-shadow';
import { Badge } from "../components/Badge/Badge"; // Assicurati che il path sia corretto
import { Tabs } from "../components/tabs/Tabs";

const meta: Meta<typeof Tabs> = {
    title: "Components/Tabs",
    component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const Skeleton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <root.div>
        <style>{`
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--gray-100); 
                border-radius: 0.5rem;
                width: 100%;
                max-width: 40rem; 
                height: 3rem; 
                margin-bottom: 0.75rem;
                font-family: sans-serif;
                font-size: 0.875rem;
                color: var(--gray-900);
            }
        `}</style>
        <div>{children}</div>
        <div /><div /><div />
    </root.div>
);

export const Default: Story = {
    render: () => (
        <Tabs>
            <Tabs.Item label="tab 1">
                <Skeleton>Tab content 1</Skeleton>
            </Tabs.Item>
            <Tabs.Item label="tab 2">
                <Skeleton>Tab content 2</Skeleton>
            </Tabs.Item>
            <Tabs.Item label={<span>tab 3 <Badge variant="positive">Positive</Badge></span>}>
                <Skeleton>Tab content 3</Skeleton>
            </Tabs.Item>
            <Tabs.Item label={<span>tab 4 <Badge variant="neutral">Neutral</Badge></span>}>
                <Skeleton>Tab content 4</Skeleton>
            </Tabs.Item>
            <Tabs.Item label={<span>tab 5 <Badge variant="negative">Negative</Badge></span>}>
                <Skeleton>Tab content 5</Skeleton>
            </Tabs.Item>
        </Tabs>
    ),
};