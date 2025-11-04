const {test, expect} = require('@playwright/test');



/* test.skip('Alerts with OK', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');


// enable dialog handling //Dialog window handler
page.on('dialog', async dialog=> {
expect(dialog.type()).toContain('alert');
expect(dialog.message()).toContain('I am an alert box!');
await dialog.accept();

})

await page.locator("//button[@id='alertBtn']").click();

await page.waitForTimeout(5000);
});   */




test.skip('Confirmation Dialog with OK and Cancel', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');


// enable confirmation dialog
page.on('dialog', async dialog=> {
await expect(dialog.type()).toContain('confirm');
await expect(dialog.message()).toContain('Press a button!');
await dialog.accept(); // close dialog by using OK button
// await dialog.dismiss(); // close dialog by using Cancel button
})

await page.locator("//button[@id='confirmBtn']").click();
await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');

await page.waitForTimeout(5000);
});


test('Prompt Dialog with OK and Cancel', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');


// enable confirmation dialog
page.on('dialog', async dialog=> {
await expect(dialog.type()).toContain('prompt');
await expect(dialog.message()).toContain('Please enter your name:');
expect(dialog.defaultValue()).toContain('Harry Potter');
await dialog.accept('John'); // close dialog by using OK button
// await dialog.dismiss(); // close dialog by using Cancel button
})

await page.locator("//button[@id='promptBtn']").click();
await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?');

await page.waitForTimeout(5000);
});