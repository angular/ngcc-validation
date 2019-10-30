import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a link to a route', async () => {
    await page.navigateTo();
    expect(page.getAnchor()).toEqual('Link to Angular child route using UIRouterUpgradeModule.forChild');
  });

  it('should navigate to a route', async () => {
    await page.navigateTo();
    await page.clickAnchor();
    expect(page.getChildMessage()).toEqual('This is the child view');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
