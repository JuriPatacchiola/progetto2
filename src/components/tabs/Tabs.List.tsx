import React from "react";
import { Button } from "./Tabs.Button";

type TabListProp = {
    tabsLabels: {
        label: React.ReactNode;
        tabId: string;
    }[];
}

export const List: React.FC<TabListProp> = ({ tabsLabels }) => {
    const handleKeyDown = (event: React.KeyboardEvent) => {
        const buttons = Array.from(
            event.currentTarget.querySelectorAll("button[role='tab']")
        ) as HTMLButtonElement[];

        const currentIndex = buttons.findIndex((button) => button === event.target);
        let newIndex = currentIndex;

        switch (event.key) {
            case "Home": newIndex = 0; break;
            case "End": newIndex = buttons.length - 1; break;
            case "ArrowRight":
            case "ArrowUp":
                newIndex = (currentIndex + 1) % buttons.length;
                break;
            case "ArrowLeft":
            case "ArrowDown":
                newIndex = (currentIndex - 1 + buttons.length) % buttons.length;
                break;
            default: return; // Esci se non è un tasto di navigazione
        }

        buttons[newIndex]?.focus();
        event.preventDefault();
    }

    return (
        <div className="tablist" onKeyDownCapture={handleKeyDown}>
            {tabsLabels.map(({ label, tabId }) => (
                <Button key={tabId} tabId={tabId}>
                    {label}
                </Button>
            ))}
        </div>
    );
}