const {test,expect} = require('@playwright/test');

test('Soft Assertions', async({page}) => {

await page.goto('https://demoqa.com/automation-practice-form');

/*
// Hard Assertions
await expect(page).toHaveTitle('DEMOQ');
await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');
await expect(page.locator("img[src='/images/Toolsqa.jpg']")).toBeVisible();
*/


// Soft Assertions
await expect.soft(page).toHaveTitle('DEMOQ');
await expect.soft(page).toHaveURL('https://demoqa.com/automation-practice-form');
await expect.soft(page.locator("img[src='/images/Toolsqa.jpg']")).toBeVisible();


});