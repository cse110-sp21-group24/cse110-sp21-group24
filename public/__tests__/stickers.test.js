const { afterAll } = require("@jest/globals");

/* 
 * Tests stickers.js. Tests various functions related to uploading and 
 * manipulating the stickers. Tested specifically on the collection page.
 */
describe('Navigate from home to index', () => {
  beforeAll(async() => { 
    // Enable JavaScript coverage
    await Promise.all([
      page.coverage.startJSCoverage(),
    ]);
    await page.goto('http://127.0.0.1:5500/public/collection.html');
  });
  
  // Navigate to index page 
  it('Test 1: should click journal cover - then navigate to index', async () => {
    
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