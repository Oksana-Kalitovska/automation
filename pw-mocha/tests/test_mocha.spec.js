const { chromium } = require('playwright');
const { expect } = require('chai');

describe('Mocha Test1', function () {
    let browser, context, page;

    before(async function () {
        browser = await chromium.launch({ headless: false });
    });

    after(async function () {
        await browser.close();
    });

    beforeEach(async function () {
        context = await browser.newContext();
        page = await context.newPage();
    });

    afterEach(async function () {
        await page.close();
        await context.close();
    });

    it('should open Demoblaze and check title', async function () {
        await page.goto('https://demoblaze.com/');
        const title = await page.title();
        expect(title).to.include('STORE');
    });
});