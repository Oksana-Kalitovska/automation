const { test, expect} = require('@playwright/test');

test('Assertions', async({page}) => {


    await page.goto('https://demoqa.com/automation-practice-form');
    //await page.waitForLoadState('networkidle');

    

// Якщо з'являється Cloudflare — дочекатись зникнення
/*if (await page.title() === 'Just a moment...') {
  console.log('⏳ Waiting for Cloudflare check...');
  await page.waitForSelector('#main-content', { timeout: 30000 });
} */


    // 1) expect(page).toHaveURL() - Page has URL
    await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');

    // 2) expect(page).toHaveTitle() - Page has title
    await expect(page).toHaveTitle('DEMOQA');

    // 3) expect(locator).toBeVisible() - Element is visible
   const logoElement = await page.locator("//img[@src='/images/Toolsqa.jpg']");
   await expect(logoElement).toBeVisible();

   // 4) expect(locator).toBeEnabled() - Control is enabled
   const firstNameInput = await page.locator("#firstName");
    await expect(firstNameInput).toBeEnabled();

  //  5) expect(locator).toBeChecked() -  Radio/Checkbox is checked
  //Radiobutton
    const maleRadio = await page.locator("//label[normalize-space()='Male']");
    await maleRadio.click();
    await expect(maleRadio).toBeChecked();

    //Checkbox
    const sportsCheckbox = await page.locator("label[for='hobbies-checkbox-1']");
    await sportsCheckbox.click();
    await expect(sportsCheckbox).toBeChecked();

  //6) expect(locator).toHaveAttribute() Element has attribute

const submitButton = await page.locator('#submit');
await expect(submitButton).toHaveAttribute('type', 'submit');

// 7) expect(locator).toHaveText()  Element matches text

const titleElement = await page.locator('.practice-form-wrapper h1');
await expect(titleElement).toHaveText('Practice Form');  // full text match




// 8) expect(locator).toContainText()  Element contains text

await expect(await page.locator('.practice-form-wrapper h1')).toContainText('Practice'); // partial text

// 9) expect(locator).toHaveValue(value) Input has a value

const emailInput = await page.locator('#userEmail');
await emailInput.fill('test@demo.com');
await expect(emailInput).toHaveValue('test@demo.com');


// 10) expect(locator).toHaveCount()  List of elements has given length
/* const dropdownOption1 = await page.locator("#state");
await dropdownOption1.click();
await dropdownOption1.fill('NCR');
await dropdownOption1.press('Enter');
await expect(dropdownOption1).toHaveCount(1); // Assuming there is only one option in the dropdown */

const stateInput = await page.locator('#react-select-3-input');
await stateInput.fill('NCR');
await stateInput.press('Enter');
await expect(stateInput).toHaveCount(1); // Assuming there is only one option in the dropdown */



await page.waitForTimeout(5000);


});