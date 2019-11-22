import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should open popup', async () => {
    await page.navigateTo();
    await page.togglePopup();
    expect(await page.getContent().getText()).toEqual('Popup content.');
  });

  it('should close popup', async () => {
    await page.navigateTo();
    await page.togglePopup();
    await page.togglePopup();
    expect(await page.getContent().isPresent()).toBe(false);
  });

  it('should open popup using service', async () => {
    await page.navigateTo();
    await page.togglePopup();
    expect(await page.getTemplate().getText()).toEqual('Popup template.');
  });

  it('should close popup using service', async () => {
    await page.navigateTo();
    await page.togglePopup();
    await page.togglePopup();
    expect(await page.getTemplate().isPresent()).toBe(false);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
