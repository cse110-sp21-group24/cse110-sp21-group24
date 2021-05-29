describe('Navigate to logs from index', () => {
  beforeEach(async() => {
    await page.goto('http://127.0.0.1:5500/public/indexPage.html');
  });

  // Navigate to home page
  it('Should click on index link - then navigate to home page', async() => {
    await Promise.all([
      page.$eval('a[href^="index.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/index');
  }, 10000);

  // Navigate to daily log page
  it('Should click on daily log link - then navigate to daily log page', async() => {
    await Promise.all([
      page.$eval('a[href^="dailyLog.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/dailyLog');
  }, 10000);

  // Navigate to calendar page
  it('Should click on index link - then navigate to home page', async() => {
    await Promise.all([
      page.$eval('a[href^="calendar.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/calendar');
  }, 10000);

  // Navigate to future log page
  it('Should click on index link - then navigate to home page', async() => {
    await Promise.all([
      page.$eval('a[href^="futureLog.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/futureLog');
  }, 10000);

  // Navigate to collection page
  it('Should click on index link - then navigate to home page', async() => {
    await Promise.all([
      page.$eval('a[href^="collection.html"]', el => el.click()),
      page.waitForNavigation()
    ]).catch(e => console.log(e));
    expect(page.url()).toContain('/collection');
  }, 10000);
});