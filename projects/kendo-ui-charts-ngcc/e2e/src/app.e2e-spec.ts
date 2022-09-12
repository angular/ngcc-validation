import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getTitleText()).toEqual('Welcome to kendo-ui-charts-ngcc!');
  });

  // When upgrading from Chrome v88 to v105, this test started being flaky. Temporarily disabling.
  // TODO(gkalpak): Fix the flakiness and re-enable.
  xit('should display chart canvas', () => {
    expect(page.getCanvas().isPresent()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
