import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('kendo-angular-inputs', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render numerictextbox rulers', async () => {
    await page.navigateTo();
    expect(await element(by.css('kendo-numerictextbox .k-link.k-link-increase')).isPresent()).toBe(true);
    expect(await element(by.css('kendo-numerictextbox .k-link.k-link-decrease')).isPresent()).toBe(true);
  });

  it('should render slider rulers', async () => {
    await page.navigateTo();
    expect(await element(by.css('kendo-slider .k-button.k-button-increase')).isPresent()).toBe(true);
    expect(await element(by.css('kendo-slider .k-button.k-button-decrease')).isPresent()).toBe(true);
  });

  it('should render slider draghandle', async () => {
    await page.navigateTo();
    expect(await element(by.css('kendo-slider .k-draghandle')).isPresent()).toBe(true);
  });

  it('should render colorgradient', async () => {
    await page.navigateTo();
    expect(await element(by.css('kendo-colorgradient .k-hsv-rectangle')).isPresent()).toBe(true);
  });

  it('should render colorpalette', async () => {
    await page.navigateTo();
    expect(await element(by.css('kendo-colorpalette table tr')).isPresent()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
