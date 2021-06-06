const { beforeAll } = require("@jest/globals");


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
    await page.goto('http://127.0.0.1:8080/public/collection.html');
  });

  it('Test 1: should open popup - check that the open button is hidden', async () => {
    await page.click('#openBtn');
    let hidden = await page.evaluate(() => {
      return document.querySelector('#openBtn').hidden;
    });
    expect(hidden).toBe(true);
  }, 10000);

  it('Test 2: should open popup - check that the close button is visible', async () => {
    let hidden = await page.evaluate(() => {
      return document.querySelector('#closeBtn').hidden;
    });
    expect(hidden).toBe(false);
  }, 10000);

  it('Test 3: should close popup - check that the close button is hidden', async () => {
    await page.click('#closeBtn');
    let hidden = await page.evaluate(() => {
      return document.querySelector('#closeBtn').hidden;
    });
    expect(hidden).toBe(true);
  }, 10000);

  it('Test 4: should close popup - check that the open button is visible', async () => {
    let hidden = await page.evaluate(() => {
      return document.querySelector('#openBtn').hidden;
    });
    expect(hidden).toBe(false);
  }, 10000);

  it('Test 5: drag sticker onto page - check it was correctly stored in local storage', async () => {
  
  }, 10000); 

  it('Test 6: delete sticker - check it is no longer in local storage', async () => {
    
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