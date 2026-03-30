import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../components/tabs/Tabs";

const meta: Meta<typeof Tabs> = {
    title: "Components/Tabs",
    component: Tabs,
};

export default meta; // 👈 QUESTO TI MANCA

export const Default: StoryObj<typeof Tabs> = {
    render: () => (
        <Tabs>
            <Tabs.Item label="Tab 1">Contenuto 1</Tabs.Item>
            <Tabs.Item label="Tab 2">Contenuto 2</Tabs.Item>
            <Tabs.Item label="Tab 3">Contenuto 3</Tabs.Item>
        </Tabs>
    ),
};