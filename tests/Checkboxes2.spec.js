const {test, expect} = require('@playwright/test');

test('Handle Checkboxes', async({page}) => {

    await page.goto('https://demoqa.com/automation-practice-form');
/*
// single checkbox
    await page.locator("label[for='hobbies-checkbox-1']").check();
    await expect(await page.locator("label[for='hobbies-checkbox-1']")).toBeChecked();
    await expect(await page.locator("label[for='hobbies-checkbox-2']").isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);

});  */


// multiple checkboxes
const checkboxes = [
    "label[for='hobbies-checkbox-1']",
    "label[for='hobbies-checkbox-2']"   
]

for(const checkbox of checkboxes)
{
    await page.locator(checkbox).check();

}

await expect(await page.locator(checkboxes[0]).isChecked()).toBeTruthy();
await expect(await page.locator(checkboxes[1]).isChecked()).toBeTruthy();
await page.waitForTimeout(5000); 

for(const checkbox of checkboxes)
{
    if(await page.locator(checkbox).isChecked())
    { 
        await page.locator(checkbox).uncheck();
    }
}

await expect(await page.locator(checkboxes[0]).isChecked()).toBeFalsy();
await expect(await page.locator(checkboxes[1]).isChecked()).toBeFalsy();    

await page.waitForTimeout(5000);

});