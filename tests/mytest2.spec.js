import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
  await page.locator('iframe[src="https\\:\\/\\/challenges\\.cloudflare\\.com\\/cdn-cgi\\/challenge-platform\\/h\\/g\\/turnstile\\/if\\/ov2\\/av0\\/rcv\\/mk6hf\\/0x4AAAAAAADnPIDROrmt1Wwj\\/light\\/fbE\\/new\\/normal\\/auto\\/"]').contentFrame().locator('body').click();
  await page.locator('iframe[src="https\\:\\/\\/challenges\\.cloudflare\\.com\\/cdn-cgi\\/challenge-platform\\/h\\/g\\/turnstile\\/if\\/ov2\\/av0\\/rcv\\/7z0fp\\/0x4AAAAAAADnPIDROrmt1Wwj\\/light\\/fbE\\/new\\/normal\\/auto\\/"]').contentFrame().locator('body').click();
  await page.goto('https://demo.nopcommerce.com/register');
  await page.locator('iframe[src="https\\:\\/\\/challenges\\.cloudflare\\.com\\/cdn-cgi\\/challenge-platform\\/h\\/g\\/turnstile\\/if\\/ov2\\/av0\\/rcv\\/dpsft\\/0x4AAAAAAADnPIDROrmt1Wwj\\/light\\/fbE\\/new\\/normal\\/auto\\/"]').contentFrame().locator('body').click();
  await page.goto('https://demo.nopcommerce.com/register');
});