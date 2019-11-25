import { AppPage } from './app.po';
import { browser, logging, by, element} from 'protractor';

describe('kendo-angular-layout', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render splitter', async () => {
    await page.navigateTo();
    await expect(element(by.css('kendo-splitter')).isPresent()).toBe(true);
    await expect(element(by.css('kendo-splitter-pane')).isPresent()).toBe(true);
  });
  it('should render tabstrip', async () => {
    await page.navigateTo();
    await expect(element(by.css('kendo-tabstrip')).isPresent()).toBe(true);
    await expect(element(by.css('kendo-splitter-pane')).isPresent()).toBe(true);
  });
  it('should render panelbar', async () => {
    await page.navigateTo();
    await expect(element(by.css('kendo-panelbar')).isPresent()).toBe(true);
    await expect(element(by.css('kendo-splitter-pane')).isPresent()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
