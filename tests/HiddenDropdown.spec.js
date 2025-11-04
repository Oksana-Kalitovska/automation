const { test, expect } = require('@playwright/test');

test('Hidden Dropdown', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
    await page.locator("input[placeholder='Username']").fill('Admin');
    await page.locator("input[placeholder='Password']").fill('admin123');
    await page.locator("button[type='submit']").click();



    // click on dropdown
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[1]").click();
    
    // waiting for options
    await page.waitForTimeout(3000);


    await page.$$('');

    for(let options of option) {
        const jobTitle = await option.textContent();
        // console.log(jobTitle);
        if (jobTitle.includes('Qa Engeneer')) {
            await option.click();
            break;
        }
    }
    
    
    await page.waitForTimeout(5000);
});