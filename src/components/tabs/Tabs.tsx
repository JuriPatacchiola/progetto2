import React from "react";
import { Tab } from "./Tab.tab";
import { TabsContext } from "./Tabs.Context";
import { Item } from "./Tabs.item";
import { List } from "./Tabs.List";

export type ItemProps = {
    label: string;
    children: React.ReactNode;
};

type TabsProps = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * QUESTA TI MANCAVA (è nello screenshot implicita)
 */
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
    const validChildren =
        React.Children.toArray(children).filter(isTabValidChildren)
            .map((child, i) => ({ ...child, id: id + i }));

    const tabsLabels = validChildren.map(
        (child) => ({
            label: (child.props as unknown as ItemProps).label,
            tabId: child.id
        }));

    if (validChildren.length !== React.Children.count(children)) {
        console.warn("Invalid children for Tabs");
    }

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div role="tablist">
                <List tabsLabels={tabsLabels} />

                {validChildren.map(({ id, ...child }) => {
                    return (
                        <Tab
                            id={id}
                            key={id}
                        >
                            {child}
                        </Tab>
                    );
                })}
                {React.Children.map(children, (child) => {
                    if (!isTabValidChildren(child)) {
                        return child
                    }
                    return null;
                })}

            </div>
        </TabsContext.Provider>
    );
};

Tabs.Item = Item;