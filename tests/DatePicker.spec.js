const { test, expect} = require('@playwright/test');


test('DatePicker', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

// await page.fill('#datepicker', '06/04/2025'); //  MM/DD/YYYY format

  const year = "2024";
  const month = "September";
  const date = "3";

   await page.click('#datepicker'); // Відкриваємо календар

  while (true) {
    const currentMonth = await page.locator(".ui-datepicker-month").textContent();
    const currentYear = await page.locator(".ui-datepicker-year").textContent();

    if (currentMonth === month && currentYear === year) {
      break;
    }

    // await page.locator("a[title='Next']").click();
    await page.click("//a[@title='Prev']");
    await page.waitForTimeout(300); // коротка пауза, щоб DOM оновився
  }

  // ✅ Захоплюємо дати тільки після того, як календар показує правильний місяць і рік
  const dates = await page.$$("xpath=//a[@class='ui-state-default']");
  

  /* for (const dt of dates) {
    const text = await dt.textContent();
    if (text.trim() === date) {
      await dt.click();
      break;
    }
  } */

// Затримка для перегляду результату



//dateselection - without loop
// await page.click("//a[@class='ui-state-default'][text()='${date}']");
await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

  await page.waitForTimeout(5000); 

});



