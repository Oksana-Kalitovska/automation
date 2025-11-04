
const { test, expect} = require('@playwright/test');



test('HandleInnerFrames', async({page}) => {

await page.goto('https://ui.vision/demo/webtest/frames/');

const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
// await frame3.locator("input[name='mytext3']").fill('welcome');

// nested frame
const childFrames = await frame3.childFrames()[0];
await childFrames[0].locator("frame[src='frame_3.html']").check();  // 0 means first frame 

await page.waitForTimeout(5000);
});