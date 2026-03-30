import { Button } from "./Tabs.Button";

type TabListProp = {
    tabsLabels: {
        label: React.ReactNode;
        tabId: string;
    }[];
}



export const List: React.FC<TabListProp> = ({ tabsLabels }) => {
    return (
        <div className="tablist">
            {tabsLabels.map(({ label, tabId }) => (
                /**
                    * <button key={tabId}>{label}</button>
                */

                <Button key={tabId} tabId={tabId}>{label}</Button>
            ))}
        </div>
    )
}