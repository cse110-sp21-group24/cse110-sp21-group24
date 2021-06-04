const { afterAll } = require("@jest/globals");

/* 
 * Tests index.js. Tests that opening and closing the navigation bar functions and
 * correctly adjust margins based on page.
 */
describe('Test opening and closing navigation bar', () => {
  beforeAll(async() => { 
    // Enable JavaScript coverage
    await Promise.all([
      page.coverage.startJSCoverage(),
    ]);
    await page.goto('http://127.0.0.1:5500/public/index.html');
  });

  // Open and close nav bar on home page
  it('Test 1: should click open button on home - navigation bar should open', async () => {
    await page.click('.openbtn');
    let width = await page.evaluate(() => {
      return document.querySelector('#navigation').style.width;
    });
    expect(width).toBe('250px');
  }, 20000);

  it('Test 2: should click close button on home - navigation bar should close', async () => {
    let width = await page.evaluate(() => {
      document.querySelector('.closebtn').click();
      return document.querySelector('#navigation').style.width;
    });
    expect(width).toBe('0px');
  }, 20000);

  // Open and close nav bar not on the home page
  it('Test 3: should click close button on settings - navigation bar should open', async () => {
    await page.goto('http://127.0.0.1:5500/public/settings.html');
    let width = await page.evaluate(() => {
      document.querySelector('.openbtn').click();
      return document.querySelector('#navigation').style.width;
    });
    expect(width).toBe('250px');
  }, 20000);

  it('Test 4: should click close button on settings - navigation bar should close', async () => {
    let width = await page.evaluate(() => {
      document.querySelector('.closebtn').click();
      return document.querySelector('#navigation').style.width;
    });
    expect(width).toBe('0px');
  }, 20000);

  afterAll(async() => {
    const [jsCoverage] = await Promise.all([
      page.coverage.stopJSCoverage(),
    ]);

    let totalBytes = 0;
    let usedBytes = 0;
    const coverage = [...jsCoverage];
    for (const entry of coverage) {
      totalBytes += entry.text.length;
      for (const range of entry.ranges) {
        usedBytes += range.end - range.start - 1;
      }
    }
    console.log(`Bytes used: ${(usedBytes / totalBytes) * 100}%`);
  });
});