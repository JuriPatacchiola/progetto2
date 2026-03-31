import React from "react";
// @ts-ignore
import * as ReactShadow from "react-shadow";
import { GlobalStyles } from "../GlobalStyles";
import { Tab } from "./Tab.tab";
import { TabsContext } from "./Tabs.Context";
import css from "./Tabs.css?raw";
import { Item, type ItemProps } from "./Tabs.item";
import { List } from "./Tabs.List";

type TabsProps = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const isTabValidChildren = (
    child: any
): child is React.ReactElement<ItemProps> => {
    return child?.type === Item;
};

export const Tabs: React.FC<TabsProps> & { Item: typeof Item } = ({
    children,
}) => {
    const id = React.useId();
    const [activeTab, setActiveTab] = React.useState(id + "0");

    const validChildren = React.Children.toArray(children)
        .filter(isTabValidChildren)
        .map((child, i) => ({ ...child, id: id + i }));

    const tabsLabels = validChildren.map((child) => ({
        label: (child.props as ItemProps).label, // Cast alle props corrette
        tabId: child.id,
    }));

    const root = (ReactShadow as any).default || ReactShadow;

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <root.div role="tablist">
                <GlobalStyles />
                <style>{css}</style>
                <List tabsLabels={tabsLabels} />

                {validChildren.map(({ id, props }) => (
                    <Tab id={id} key={id}>
                        {props.children}
                    </Tab>
                ))}

                {React.Children.map(children, (child) => {
                    if (!isTabValidChildren(child)) return child;
                    return null;
                })}
            </root.div>
        </TabsContext.Provider>
    );
};

Tabs.Item = Item;