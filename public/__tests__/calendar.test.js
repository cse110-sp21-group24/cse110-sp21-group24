const { afterAll, expect } = require("@jest/globals");

/* 
 * Tests calendar.js. Tests that dates are correct after switching between months
 */
describe('Test calendar dates and months', () => {
  beforeAll(async() => { 
    // Enable JavaScript coverage
    await Promise.all([
      page.coverage.startJSCoverage(),
    ]);  
    await page.goto('http://127.0.0.1:8080/public/calendar.html');
  });

  // Navigate to next month 
  it('Test 1: should click next button - then navigate to next month', async () => {
    await page.click('.next');
    let month = await page.$('h1');
    let value = await page.evaluate(el => el.textContent, month);
    expect(value).toBe("July 2021");
  }, 20000);

  // Navigate to previous month
  it('Test 2: should click previous button - then navigate to previous month', async () => {
    let month = await page.evaluate(() => {
      document.querySelector('.prev').click();
      return document.querySelector('h1').textContent;
    });
    expect(month).toBe("June 2021");
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