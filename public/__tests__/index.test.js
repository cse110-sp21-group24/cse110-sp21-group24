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
    await page.goto('http://127.0.0.1:5500/public/calendar.html');
  });

  // Navigate to next month 
  it('Test 1: should click next button - then navigate to next month', async () => {

  }, 20000);

  // Navigate to previous month
  it('Test 1: should click previous button - then navigate to previous month', async () => {

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