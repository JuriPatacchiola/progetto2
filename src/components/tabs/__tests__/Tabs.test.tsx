import "@testing-library/jest-dom";
import { fireEvent, render, within } from "@testing-library/react";
import { Tabs } from "../Tabs";

const getShadowRoot = (): HTMLElement | null => {
    const shadowHost = document.querySelector('div[data-testid="tabs-root"]');
    return shadowHost ? (shadowHost.shadowRoot as unknown as HTMLElement) : null;
}

describe("Tabs Comonent", () => {
    const renderTabs = () => (
        <Tabs>
            <Tabs.Item label="Tab 1">
                Content 1
            </Tabs.Item>
            <Tabs.Item label="Tab 2">
                Content 2
            </Tabs.Item>
            <Tabs.Item label="Tab 3">
                Content 3
            </Tabs.Item>
        </Tabs>
    );

    let shadowRoot: HTMLElement | null = null;
    beforeEach(() => {
        render(renderTabs());
        shadowRoot = getShadowRoot();
        expect(shadowRoot).not.toBeNull();
    });

    afterEach(() => {
        shadowRoot = null;
    });

    it("renders all tab labels", () => {
        if (!shadowRoot) return;
        const { getByText } = within(shadowRoot);
        expect(getByText("Tab 1")).toBeInTheDocument();
        expect(getByText("Tab 2")).toBeInTheDocument();
        expect(getByText("Tab 3")).toBeInTheDocument();
    });
    it("dispays the first tap content by default and hides the others", () => {
        if (!shadowRoot) return;
        const { getByText } = within(shadowRoot);
        const content1 = getByText("Content 1").parentElement;
        const content2 = getByText("Content 2").parentElement;
        const content3 = getByText("Content 3").parentElement;
        expect(content1).toBeInTheDocument();
        expect(content1).toBeVisible();
        expect(content2).toBeInTheDocument();
        expect(content2).not.toBeVisible();
        expect(content3).toBeInTheDocument();
        expect(content3).not.toBeVisible();
    });

    it("switches content when clicking on a different tab", async () => {
        if (!shadowRoot) return;
        const { getByText } = within(shadowRoot);

        // Il trucco: selezioniamo i contenitori Role 'tabpanel'
        // Se non hanno un nome, li prendiamo tramite il testo che contengono
        const content1 = getByText("Content 1").parentElement;
        const content2 = getByText("Content 2").parentElement;
        const content3 = getByText("Content 3").parentElement;

        // Clicchiamo sulla Tab 3 (come nello screenshot)
        const tab3 = getByText("Tab 3");
        fireEvent.click(tab3);

        // Verifichiamo gli attributi hidden come fa lui
        expect(content1).toHaveAttribute("hidden");
        expect(content2).toHaveAttribute("hidden");
        expect(content3).not.toHaveAttribute("hidden");
    });


    it("applies aria-selected attribute to the selected tab", () => {
        if (!shadowRoot) return;
        const { getAllByRole } = within(shadowRoot);
        const tabs = getAllByRole("tab");
        expect(tabs[0]).toHaveAttribute("aria-selected", "true")
        expect(tabs[1]).toHaveAttribute("aria-selected", "false")
        expect(tabs[2]).toHaveAttribute("aria-selected", "false")

        fireEvent.click(tabs[1]);
        expect(tabs[0]).toHaveAttribute("aria-selected", "false")
        expect(tabs[1]).toHaveAttribute("aria-selected", "true")
        expect(tabs[2]).toHaveAttribute("aria-selected", "false")
    })
});