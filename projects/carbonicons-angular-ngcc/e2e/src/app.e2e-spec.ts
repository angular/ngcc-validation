import { browser, by, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to carbonicons-angular-ngcc!');
  });

  it('should display a 20x20 icon', () => {
    page.navigateTo();

    const iconComponentViewContentSelector = 'svg[ibmIconDownload][width="20"][height="20"]';
    const iconComponentView = page.downloadIcon.element(by.css(iconComponentViewContentSelector));

    expect(iconComponentView.isPresent()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
