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

    await page.clickRippleEnabledButton(firstButton);
    expect(page.isRippleTarget(firstButton)).toBe(true);
    expect(page.isRippleTarget(secondButton)).toBe(false);

    // Wait for the ripple animation to complete, so that the `k-ripple-target` class is removed.
    await browser.sleep(500);

    await page.clickRippleEnabledButton(secondButton);
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
