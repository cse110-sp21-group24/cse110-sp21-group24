const { afterAll } = require("@jest/globals");

describe('Navigate from home to index', () => {
  beforeAll(async() => { 
    // Enable JavaScript coverage
    await Promise.all([
      page.coverage.startJSCoverage(),
    ]);
    await page.goto('http://127.0.0.1:5500/public/index.html');
  });
  
  // Navigate to index page 
  it('should click journal cover - then navigate to index', async () => {
    await page.click('#toIndex');


    expect(page.url()).toContain('/indexPage');
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