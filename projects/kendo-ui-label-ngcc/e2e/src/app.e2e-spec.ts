import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should focus composite component when clicking label', async() => {
    page.navigateTo();
    await page.getLabelAt(0).click();

    const dropDown = page.getDropDownWrap();
    const activeElement = browser.driver.switchTo().activeElement();
    expect(await dropDown.getId()).toBe(await activeElement.getId());
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
