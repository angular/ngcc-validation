import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getNavItem(ref: string) {
    return element(by.css(`a[uiSref="${ref}"]`));
  }

  getViewContents() {
    return element(by.css('ui-view')).getText();
  }
}
