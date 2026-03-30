import { useTabsContext } from "./Tabs.Context";

type ButtonProps = {
    children: React.ReactNode;
    tabId: string;
}

export const Button: React.FC<ButtonProps> = ({ children, tabId }) => {
    const { activeTab, setActiveTab } = useTabsContext();
    return (
        <button
            role="tab"
            type="button"
            key={tabId}
            onClick={() => setActiveTab(tabId)}
            aria-controls={tabId}
            aria-selected={activeTab == tabId}
            id={`button-${tabId}`}
        >
            {children}
        </button>
    );
};