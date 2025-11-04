const { test, expect} = require('@playwright/test');


test('Checkboxes', async ({page}) => {

await page.goto('https://demoqa.com/automation-practice-form');


/*
// single checkbox
await page.locator("label[for='hobbies-checkbox-1']").check();
// await page.check("//input[@id='hobbies-checkbox-1' and @type='checkbox']");

await expect(await page.locator("label[for='hobbies-checkbox-1']")).toBeChecked();
// await expect(await page.locator("label[for='hobbies-checkbox-1']")).isChecked().toBeTruthy();;

await expect(await page.locator("label[for='hobbies-checkbox-2']").isChecked()).toBeFalsy();
*/

// Multiple checkboxes
 const checkboxLocators = [
    "label[for='hobbies-checkbox-1']",
    "label[for='hobbies-checkbox-2']"
 ]

 for(const locator of checkboxLocators ) // select multiple checkboxes
{
    await page.locator(locator).check();
}

await page.waitForTimeout(5000);


for(const locator of checkboxLocators) // unselect selected checkboxes
    {
        if(await page.locator(locator).isChecked()) 
            {
        await page.locator(locator).uncheck();
            }
}

await page.waitForTimeout(5000);

});
