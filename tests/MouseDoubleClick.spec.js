const {test, expect} = require('@playwright/test'); 

test('DoubleClick', async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

const button = await page.locator("(//button[normalize-space()='Copy Text'])[1]");
// double click

await button.dblclick();     // .dblclick(); 

const f2 = await page.locator("//input[@id='field2']");
await expect(f2).toHaveValue('Hello World!'); // .toHaveValue

await page.waitForTimeout(5000);

});