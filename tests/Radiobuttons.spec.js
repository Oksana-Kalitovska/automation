const {test, expect}=require('@playwright/test');

test('Radiobuttons', async({page}) => {


await page.goto('https://demoqa.com/automation-practice-form');

await page.locator("label[for='gender-radio-1']").check();
// await page.check("label[for='gender-radio-1']");

await expect(await page.locator("label[for='gender-radio-1']")).toBeChecked();
await expect(await page.locator("label[for='gender-radio-1']").isChecked()).toBeTruthy(); //male

await expect(await page.locator("label[for='gender-radio-2']").isChecked()).toBeFalsy(); //female

 





await page.waitForTimeout(5000);


});