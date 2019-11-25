import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should format numbers', () => {
    page.navigateTo();
    expect(page.getFormattedNumber()).toEqual('42,12 лв.');
  });

  it('should format dates', async() => {
    page.navigateTo();
    expect(page.getFormattedDate()).toEqual('22.11.2019 г.');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
