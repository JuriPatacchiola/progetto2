import { expect, test } from "@playwright/test";

test.describe("Tabs Component Visual Tests", () => {
    test("should match snapshot", async ({ page }) => {
        // Corretto 'globals' nell'URL
        await page.goto("/iframe.html?globals=theme%3Alight&id=components-tabs--default&viewMode=story");

        // Aspetta che lo Shadow DOM o il root sia pronto
        await page.waitForSelector("div[data-testid='tabs-root']");

        // Primo screenshot generico
        await expect(page).toHaveScreenshot();

        // Secondo screenshot specifico con tolleranza dell'1%
        await expect(page).toHaveScreenshot("tabs-default.png", {
            maxDiffPixelRatio: 0.01,
        });
    });
});