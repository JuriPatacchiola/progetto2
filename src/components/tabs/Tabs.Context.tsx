import React from "react";

interface TabsContextType {
    activeTab: string;
    setActiveTab: (tabId: string) => void;
}

export const TabsContext = React.createContext<TabsContextType | undefined>(
    undefined
);


export const useTabsContext = () => {
    const context = React.useContext(TabsContext);
    if (context == undefined) {
        throw new Error("useTabsContext must be used whithin a tabs component")
    }
    return context
};