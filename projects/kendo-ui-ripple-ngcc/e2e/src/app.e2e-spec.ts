import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('adds ripple overlay on button click', async () => {
    const firstButton = page.getButtonAt(0);
    const secondButton = page.getButtonAt(1);

    await page.navigateTo();
    expect(page.isRippleTarget(firstButton)).toBe(false);
    expect(page.isRippleTarget(secondButton)).toBe(false);

    await firstButton.click();
    expect(page.isRippleTarget(firstButton)).toBe(true);
    expect(page.isRippleTarget(secondButton)).toBe(false);

    await secondButton.click();
    expect(page.isRippleTarget(firstButton)).toBe(false);
    expect(page.isRippleTarget(secondButton)).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
