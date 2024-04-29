import { test, expect } from "@playwright/test";

test("Verify Full-page element snapshot", async ({ page }) => {
  await page.goto("https://www.timedoctor.com");

  await expect(page).toHaveScreenshot({ fullPage: true });
});
