import {test, expect} from '@playwright/test';    
import { getRandomNumber, getRandomString } from '../utils/data-helpers';  

test.describe.only('Tips and Tricks sction', () => {
    // Skipping test - 70.Skip Test
    test.only('TestInfo Object', async ({page}, testInfo) => {
        await page.goto('https://www.demoblaze.com/');
        console.log(testInfo);

        let randomNumber = await getRandomNumber();
        let randomString = await getRandomString();
        
        console.log(randomString);
        console.log(randomNumber);

    });
 

    // Skipping test in specific browser - 71.Skip Test in Specific Browser
    test('Skip Browser', async ({page, browserName}) => {
        test.skip(browserName === 'chromium', 'Skipping test in Chromium browser');
        await page.goto('https://www.demoblaze.com/');
        console.log(browserName);
    })

    // Marking test as FixMe - 72.FixMe Annotation
      test('FixMe Annotation', async ({page, browserName}) => {
        test.fixme(browserName === 'chromium', 'Test is broken in Chromium browser');
        await page.goto('https://www.demoblaze.com/');
        console.log(browserName);
    })


    // Retry failed test - 73.Retry Failed Tests
    test.skip('Retry', async ({page, browserName}) => {
        // test(browserName === 'chromium', 'Retry');
        await page.goto('https://www.demoblaze.com/');
        console.log(browserName);

        // npx playwright test tips.spec.ts   --retries=3    - command to run with retries
    })

    

    // Data Driven Testing - 74.Parameterized Tests 
    const products = ['Test','Test2','Test3','Test4']
    for (const product of products) {
        test(`Add to cart ${product}`, async ({page}) => {
            await page.goto('https://demo.nopcommerce.com');
            await page.fill('#small-searchterms', `${product}`);
            // await page.click('text=Search');
            await page.waitForTimeout(3000);
        
        });
    }


// Mouse Movement Simulation - 75.Mouse Movement Simulation
    test('Mouse Movement Simulation', async ({page}) => {
        await page.goto('https://www.demoblaze.com/');
        await page.mouse.move(0,0);
        await page.waitForTimeout(3000);
        await page.mouse.down({ button: 'right' });
        await page.waitForTimeout(3000);
        await page.mouse.move(100,100);
        await page.waitForTimeout(3000);
        await page.mouse.up({ button: 'left' });
        await page.waitForTimeout(3000);
    });

    // Multiple Browser tabs - 76.Multiple Browser tabs
    test('Multiple Browser tabs', async ({browser}) => {
       const context = await browser.newContext();
       const page1 = await context.newPage();
       const page2 = await context.newPage();
       const page3 = await context.newPage();
            await page1.goto('https://www.demoblaze.com/');
            await page2.goto('https://www.google.com/');
            await page3.goto('https://www.amazon.com/');
            await page1.waitForTimeout(3000);

    });

    // 77. Device Emulation
   // px playwright open --device="iPhone 13 Pro Max" wikipedia.org

   // 78. PDF Generation
   // npx playwright pdf wikipedia.org wiki.pdf

   //79. Screenshot Generation
    // npx playwright screenshot wikipedia.org wiki.png
    // npx playwright screenshot --device="iPhone 13 Pro" --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone-image.png

    // 80. Change Language and Timezone
    // npx playwright open --lang="fr-FR" --timezone="Europe/Paris" wikipedia.org
    // npx playwright open --timezone="Europe/Rome" --lang="it-IT" google.com
});