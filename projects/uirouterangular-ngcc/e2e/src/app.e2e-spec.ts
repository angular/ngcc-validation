import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('ui-router/angular', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display nav bar', () => {
    page.navigateTo();
    expect(page.getNavItem('component1').getText()).toEqual('Component1');
    expect(page.getNavItem('component2').getText()).toEqual('Component2');
    expect(page.getNavItem('lazy.lazy1').getText()).toEqual('Lazy 1');
    expect(page.getNavItem('lazy.lazy2').getText()).toEqual('Lazy 2');
  });

  it('should navigate to each view', () => {
    page.navigateTo();
    page.getNavItem('component1').click();
    expect(page.getViewContents()).toEqual('component1 works!');
    page.getNavItem('component2').click();
    expect(page.getViewContents()).toEqual('component2 works!');
    page.getNavItem('lazy.lazy1').click();
    expect(page.getViewContents()).toEqual('lazy1 works!');
    page.getNavItem('lazy.lazy2').click();
    expect(page.getViewContents()).toEqual('lazy2 works!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
