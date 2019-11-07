import { AppPage } from './app.po';
import { browser, by, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a Kendo grid', async () => {
    await page.navigateTo();
    const cell = page.getCell();
    const value = await cell.getText();
    await cell.click();
    await expect(cell.element(by.css('input')).getAttribute('value')).toEqual(value);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
