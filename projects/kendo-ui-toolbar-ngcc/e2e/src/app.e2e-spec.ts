import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('kendo-toolbar', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render toolbar', async () => {
    await page.navigateTo();
    await expect(await page.getToolbarElement().isPresent()).toBe(true);
  });
  it('should render buttons', async () => {
    await page.navigateTo();
    expect(await page.getFirstButton().isPresent()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
