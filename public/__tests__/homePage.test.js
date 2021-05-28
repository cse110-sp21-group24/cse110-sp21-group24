
describe('Navigate from home to index', () => {
  beforeAll(async() => { 
    await page.goto('http://127.0.0.1:5500/public/index.html');
  });
  // Navigate to index page 
  it('should click journal cover - then navigate to index', async () => {
    await page.click('#toIndex');
    expect(page.url()).toContain('/indexPage');
  });
});