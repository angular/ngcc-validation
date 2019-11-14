import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('kendo-angular-editor', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render editor', async () => {
    page.navigateTo();
    expect(await page.getEditorElement().isPresent()).toBe(true);
  });
  it('should render toolbar', async () => {
    page.navigateTo();
    expect(await page.getToolbarElement().isPresent()).toBe(true);
  });
  it('should render toolbar buttongroups', async () => {
    page.navigateTo();
    expect(await page.getToolbarButtonGroups().isPresent()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
