const { afterAll, beforeAll } = require("@jest/globals");

/* Tests functionality of side navigation bar. Starting from the home page, 
 * each page is navigated to and checked.
 */
describe('Use menu bar to navigate to pages from home', () => {
  beforeAll(async() => {
    // Enable JavaScript coverage
    await Promise.all([
      page.coverage.startJSCoverage(),
    ]);
  });

  beforeEach(async() => { 
    await page.goto('http://127.0.0.1:8080/public/index.html');
  });

  // Navigate to index page 
  it('Test 1: should click menu bar item - then navigate to index', async () => {
    //let btn = await page.click(".openbtn");
    //await page.$eval('.openbtn', el => el.click()),
    await Promise.all([
      page.$eval('a[href^="indexPage.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/indexPage');
  }, 10000);

  // Navigate to daily logs page 
  it('Test 2: should click menu bar item - then navigate to daily logs', async () => {
    await Promise.all([
      page.$eval('a[href^="dailyLog.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/dailyLog');
  }, 10000);

  // Navigate to monthly logs page 
  it('Test 3: should click menu bar item - then navigate to monthly logs', async () => {
    await Promise.all([
      page.$eval('a[href^="calendar.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/calendar');
  }, 10000);

  // Navigate to future logs page 
  it('Test 4: should click menu bar item - then navigate to future logs', async () => {
    await Promise.all([
      page.$eval('a[href^="futureLog.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/futureLog');
  }, 10000);

  // Navigate to collections page 
  it('Test 5: should click menu bar item - then navigate to collections logs', async () => {
    await Promise.all([
      page.$eval('a[href^="collection.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/collection');
  }, 10000);
  
  // Navigate to settings page 
  it('Test 6: should click menu bar item - then navigate to settings logs', async () => {
    await Promise.all([
      page.$eval('a[href^="settings.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/settings');
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