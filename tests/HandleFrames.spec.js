const { test, expect} = require('@playwright/test');

test('Assertions', async({page}) => {


    await page.goto('https://ui.vision/demo/webtest/frames/');


// total frames
const allFrames = await page.frames();
console.log('Number of Frames:', allFrames.length);

// approach 1 - use name or url
// const frame1 = await page.frame('name'); // if name is present
// const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html'}); // frame1
// await frame1.fill("input[name='mytext1']", 'Hello');

// approach 2 - using frame locator
const inputBox = await page.frameLocator('(//frame)[1]').locator("input[name='mytext1']");
await inputBox.fill('Hello');



await page.waitForTimeout(5000);
});
