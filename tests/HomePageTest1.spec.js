const {test, expect} = require('@playwright/test');

test('Home Page Test1', async ({page}) => {

    await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    const pageTitle = await page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('Contact List App');

    const pageURL = await page.url();
    await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/');

}); 