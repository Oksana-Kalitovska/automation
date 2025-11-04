const {test,expect} = require('@playwright/test');

test('Single File', async({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/');


await page.waitForSelector("//input[@id='singleFileInput']"); // Wait for the input element to be visible
// await page.locator("//input[@id='singleFileInput']").click();
await page.setInputFiles("//input[@id='singleFileInput']", 'tests/UploadFiles/testtt.png'); // Set the file to the input element


await page.waitForTimeout(5000); // Wait for 5 seconds to observe the file upload
});


 test.only('Multiple Files', async({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.locator("//input[@id='multipleFilesInput']")
.setInputFiles(['tests/UploadFiles/image.png', 'tests/UploadFiles/testtt.png']);

expect (await page.locator("//input[@id='multipleFilesInput']")).toHaveText('2 files selected'); // Adjust the selector to check for the correct text

await page.waitForTimeout(5000);


// Removing files
await page.locator("xxxx").setInputFiles([]); // Clear the input by setting it to an empty array
await page.waitForTimeout(3000);
expect (await page.locator("xxxxxx")).toHaveText('No files selected'); // Adjust the selector to check for the correct text after clearing
}); 