const { afterAll, beforeAll } = require("@jest/globals");

describe('Use menu bar to navigate to pages from home', () => {
  beforeAll(async() => {
    // Enable JavaScript coverage
    await Promise.all([
      page.coverage.startJSCoverage(),
    ]);
  });

  beforeEach(async() => { 
    await page.goto('http://127.0.0.1:5500/public/settings.html');
    page.waitForNavigation();

  });

  // Navigate to index page 
  it('should click menu bar item - then navigate to index', async () => {
    //await page.on('load');
    let mValue;
    await page.evaluate(() => {
      //mValue = document.documentElement.style.getPropertyValue('--first-color');
      mValue = document.querySelector('#palette');
    });
    expect(mValue).toBe('red');
  }, 10000);

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