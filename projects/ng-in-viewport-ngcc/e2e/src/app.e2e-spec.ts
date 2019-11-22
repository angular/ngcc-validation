import { AppPage } from './app.po';
import { browser, ElementFinder, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should 4th element be active', () => {
    expect(page.getListItem(3).then(el => page.hasClass(el, 'active'))).toBe(
      true
    );
  });

  it('should 5th element be inactive', () => {
    expect(page.getListItem(4).then(el => page.hasClass(el, 'inactive'))).toBe(
      true
    );
  });

  describe('when user scrolled down', () => {
    beforeEach(async done => {
      const el: ElementFinder = await page.getListItem(7);
      await page.scrollTo(el);
      done();
    });

    it('should 4th element be inactive', () => {
      expect(
        page.getListItem(3).then(el => page.hasClass(el, 'inactive'))
      ).toBe(true);
    });

    it('should 5th element be active', () => {
      expect(page.getListItem(4).then(el => page.hasClass(el, 'active'))).toBe(
        true
      );
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
