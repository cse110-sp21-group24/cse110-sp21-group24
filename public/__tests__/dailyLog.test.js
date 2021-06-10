/* 
 * Tests dailyLog.js. Tests that the left window changes when different days are cliked &
also tests the bulletEntries functionality
 */

describe('Test daily log page functionality', () => {
  beforeAll(async() => { 
    await page.goto('http://127.0.0.1:8080/public/dailyLog.html');
  });

    // Click add bullet button to have bullets should in window 
    it('Test 1: should click on add bullet button and have bullets appear in window', async () => {
      await page.waitForSelector("#monContainer");
      let numEntries = await page.evaluate(() => {
        document.querySelector("#mon-add").click();
        document.querySelector("#mon-add").click();
        document.querySelector("#mon-add").click();
        document.querySelector("#mon-add").click();
        return document.querySelector("#mon > div > ul").children.length;
      });
      expect(numEntries).toBe(4);
    }, 20000);

    // Click trash icon to have bullet removed from window 
    it('Test 2: should click on trash icon to have bullet removed', async () => {
      await page.waitForSelector("#mon > div > ul > div:nth-child(1) > li");
      let numEntries = await page.evaluate(() => {
        document.querySelector("#myDropDown > img.deleteImage").click();
        //return document.querySelector("#single-day > div.bigDayContent > h1").textContent;
        return document.querySelector("#mon > div > ul").children.length;
      });
      expect(numEntries).toBe(3);
    }, 20000);
    
    // Click event (bookmark) icon to have bullet image changed in window 
    it('Test 3: should click on bookmark icon and have bullet changed', async () => {
      await page.waitForSelector("#mon > div > ul > div:nth-child(1) > li");
      let entry = await page.evaluate(() => {
        document.querySelector("#myDropDown > img.eventImage").click();
        //return document.querySelector("#single-day > div.bigDayContent > h1").textContent;
        return document.querySelector("#mon > div > ul > div:nth-child(1) > li").className;
      });
      expect(entry).toBe("event-list");
    }, 20000);
    
    // Click important (folder) icon to have bullet image changed in window 
    it('Test 4: should click on folder icon and have bullet changed', async () => {
      await page.waitForSelector("#mon > div > ul > div:nth-child(1) > li");
      let entry = await page.evaluate(() => {
        document.querySelector("#myDropDown > img.importantImage").click();
        return document.querySelector("#mon > div > ul > div:nth-child(1) > li").className;
      });
      expect(entry).toBe("important-list");
    }, 20000);
    
    // Click isnpiration (star) icon to have bullet image changed in window    
    it('Test 5: should click on star icon and have bullet changed', async () => {
      await page.waitForSelector("#mon > div > ul > div:nth-child(1) > li");
      let entry = await page.evaluate(() => {
        document.querySelector("#myDropDown > img.inspirationImage").click();
        return document.querySelector("#mon > div > ul > div:nth-child(1) > li").className;
      });
      expect(entry).toBe("inspiration-list");
    }, 20000);
    
    // Click event icon to have bullet image changed in window 
    it('Test 6: should click on event icon and have bullet changed', async () => {
      await page.waitForSelector("#mon > div > ul > div:nth-child(1) > li");
      let entry = await page.evaluate(() => {
        document.querySelector("#myDropDown > img.eventImage").click();
        //return document.querySelector("#single-day > div.bigDayContent > h1").textContent;
        return document.querySelector("#mon > div > ul > div:nth-child(1) > li").className;
      });
      expect(entry).toBe("event-list");
    }, 20000);
    
    // Click note (box) icon to have bullet image changed in window 
    it('Test 7: should click on box icon and have bullet changed', async () => {
      await page.waitForSelector("#mon > div > ul > div:nth-child(1) > li");
      let entry = await page.evaluate(() => {
        document.querySelector("#myDropDown > img.noteImage").click();
        //return document.querySelector("#single-day > div.bigDayContent > h1").textContent;
        return document.querySelector("#mon > div > ul > div:nth-child(1) > li").className;
      });
      expect(entry).toBe("note-list");
    }, 20000);
    
    // Click checkmark icon to show bullet marked as completed
    it('Test 8: should click on checkmark icon and have bullet changed', async () => {
      await page.waitForSelector("#mon > div > ul > div:nth-child(1) > li");
      let entry = await page.evaluate(() => {
        document.querySelector("#myDropDown > img.checkMarkImage").click();
        //return document.querySelector("#single-day > div.bigDayContent > h1").textContent;
        return document.querySelector("#mon > div >ul > div:nth-child(1) > li").className;
      });
      expect(entry).toBe("checkMark-list");
    }, 20000);      

    // The bullet added should be able to see prompt to add text
    it('Test 9: clicking on add bullet button & bullet shows prompt', async () => {
      await page.waitForSelector("#monContainer");
      let entry = await page.evaluate(() => {
        //document.querySelector("#mon-add").click();
        return document.querySelector("#mon > div > ul > div:nth-child(1) > li").textContent;
      });
      expect(entry).toBe("ADD ENTRY");
    }, 20000);

    // The bullet added should be able to edit
    it('Test 10: clicking on add bullet button & should be able to edit', async () => {
      await page.waitForSelector("#monContainer");
      let entry = await page.evaluate(() => {
        //document.querySelector("#mon-add").click();
        return document.querySelector("#mon > div > ul > div:nth-child(1) > li").contentEditable;
      });
      expect(entry).toBe("true");
    }, 20000);    
    
    // Click on Moday and should appear as header on left window
    it('Test 11: should click Monday and have it appear on left window', async () => {
      await page.waitForSelector("#monContainer > h2");
      let day = await page.evaluate(() => {
        document.querySelector("#monContainer > h2").click();
        return document.querySelector("#single-day > div.bigDayContent > h1").textContent;
      });
      expect(day).toBe('Monday');
    }, 20000);

    // Click on Wednesday and should appear as header on left window
    it('Test 12: should click Wednesday and have it appear on left window', async () => {
      await page.waitForSelector("#wedContainer > h2");
      let day = await page.evaluate(() => {
        document.querySelector("#wedContainer > h2").click();
        return document.querySelector("#single-day > div.bigDayContent > h1").textContent;
      });
      expect(day).toBe('Wednesday');
    }, 20000);
    
    // Click on Fridayday and should appear as header on left window
    it('Test 13: should click Friday and have it appear on left window', async () => {
      await page.waitForSelector("#friContainer > h2");
      let day = await page.evaluate(() => {
        document.querySelector("#friContainer > h2").click();
        return document.querySelector("#single-day > div.bigDayContent > h1").textContent;
      });
      expect(day).toBe('Friday');
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
