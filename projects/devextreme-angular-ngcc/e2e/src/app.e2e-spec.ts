import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to devextreme-angular-ngcc!');
  });

  it('should update the welcome message in button click', () => {
    page.navigateTo();
    expect(page.getButtonText()).toBe('Update title');

    page.clickButton();
    expect(page.getTitleText()).toBe('Welcome to devextreme-angular-ngcc - It works!');
  });

  it('should display a chart', () => {
    page.navigateTo();
    const chartText = page.getChartText();

    expect(chartText).toContain('Apples');
    expect(chartText).toContain('Bananas');
    expect(chartText).toContain('Oranges');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
