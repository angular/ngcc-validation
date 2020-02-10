import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('kendo-ui-misc-ngcc app is running!');
    expect(page.getButton().getText()).toEqual('Default');
    expect(page.getButton().getAttribute('class')).toContain('k-button');
  });
  it('should render buttons components', async () => {
    await page.navigateTo();
    expect(await element(by.css("kendo-buttongroup")).isPresent()).toBe(true);
    expect(await element(by.css("kendo-chip")).isPresent()).toBe(true);
    expect(await element(by.css("kendo-chip-list")).isPresent()).toBe(true);
    expect(await element(by.css("kendo-dropdownbutton")).isPresent()).toBe(true);
    expect(await element(by.css("kendo-splitbutton")).isPresent()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
