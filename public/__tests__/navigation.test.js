
describe('Use menu bar to navigate to pages from home', () => {
  beforeEach(async() => { 
    await page.goto('http://127.0.0.1:5500/public/index.html');
  });
  // Navigate to index page 
  it('should click menu bar item - then navigate to index', async () => {
    //let btn = await page.click(".openbtn");
    //await page.$eval('.openbtn', el => el.click()),
    await Promise.all([
      page.$eval('a[href^="indexPage.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/indexPage');
  }, 10000);
  // Navigate to daily logs page 
  it('should click menu bar item - then navigate to daily logs', async () => {
    await Promise.all([
      page.$eval('a[href^="dailyLog.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/dailyLog');
  }, 10000);
  // Navigate to monthly logs page 
  it('should click menu bar item - then navigate to monthly logs', async () => {
    await Promise.all([
      page.$eval('a[href^="calendar.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/calendar');
  }, 10000);
  // Navigate to future logs page 
  it('should click menu bar item - then navigate to future logs', async () => {
    await Promise.all([
      page.$eval('a[href^="futureLog.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/futureLog');
  }, 10000);
  // Navigate to collections page 
  it('should click menu bar item - then navigate to collections logs', async () => {
    await Promise.all([
      page.$eval('a[href^="collection.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/collection');
  }, 10000);
  // Navigate to settings page 
  it('should click menu bar item - then navigate to settings logs', async () => {
    await Promise.all([
      page.$eval('a[href^="settings.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/settings');
  }, 10000);
});