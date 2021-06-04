const { afterAll, beforeAll, it, expect } = require("@jest/globals");

/*
 * Test functionality of settings.js. Primarily tests that the correct palette is set
 * after uploading an image and generating a color scheme, as well as after resetting
 * the colors.
 */
describe('Test correct color settings by palette generator', () => {
  beforeAll(async() => {
    // Enable JavaScript coverage
    await Promise.all([
      page.coverage.startJSCoverage(),
    ]);
    await page.goto('http://localhost:5500/public/settings.html', {waitUntil: 'load'});
  });

  // Upload image and check colors were correctly set
  it('Test 1: Upload image - check an image was uploaded', async () => {
    const elementHandle = await page.$("input[type=file]");
    await elementHandle.uploadFile('public/images/settings-test.PNG');
    let src = await page.evaluate(() => {
      return document.querySelector('img').src;
    });
    expect(src).toContain('blob:http://localhost:5500/');
  });

  it('Test 2: Upload image - check first color is correct', async () => {
    const elementHandle = await page.$("input[type=file]");
    await elementHandle.uploadFile('public/images/settings-test.PNG');
    let color = await page.evaluate(() => {
      return document.documentElement.style.getPropertyValue('--first-color');
    });
    expect(color).toBe('#fb0c5c');
  });

  it('Test 3: Upload image - check second color is correct', async () => {
    const elementHandle = await page.$("input[type=file]");
    await elementHandle.uploadFile('public/images/settings-test.PNG');
    let color = await page.evaluate(() => {
      return document.documentElement.style.getPropertyValue('--second-color');
    });
    expect(color).toBe('#ded4d7');
  });

  it('Test 4: Upload image - check third color is correct', async () => {
    const elementHandle = await page.$("input[type=file]");
    await elementHandle.uploadFile('public/images/settings-test.PNG');
    let color = await page.evaluate(() => {
      return document.documentElement.style.getPropertyValue('--third-color');
    });
    expect(color).toBe('#e1688f');
  });

  it('Test 5: Upload image - check fourth color is correct', async () => {
    const elementHandle = await page.$("input[type=file]");
    await elementHandle.uploadFile('public/images/settings-test.PNG');
    let color = await page.evaluate(() => {
      return document.documentElement.style.getPropertyValue('--fourth-color');
    });
    expect(color).toBe('#fc84ac');
  });

  // Check default colors on reset
  it('Test 6: Click reset - check that the first default color was correctly set', async () => {
    await page.click('#resetBtn');
    let color = await page.evaluate(() => {
      return document.documentElement.style.getPropertyValue('--first-color');
    });
    expect(color).toBe('#9EB3C2');
  }, 10000);

  it('Test 7: Click reset - check that the second default color was correctly set', async () => {
    await page.click('#resetBtn');
    let color = await page.evaluate(() => {
      return document.documentElement.style.getPropertyValue('--second-color');
    });
    expect(color).toBe('#9BD4F5');
  }, 10000);

  it('Test 8: Click reset - check that the third default color was correctly set', async () => {
    await page.click('#resetBtn');
    let color = await page.evaluate(() => {
      return document.documentElement.style.getPropertyValue('--third-color');
    });
    expect(color).toBe('#1D8ECE');
  }, 10000);

  it('Test 9: Click reset - check that the fourth default color was correctly set', async () => {
    await page.click('#resetBtn');
    let color = await page.evaluate(() => {
      return document.documentElement.style.getPropertyValue('--fourth-color');
    });
    expect(color).toBe('#2E77BB');
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