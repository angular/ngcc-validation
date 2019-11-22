import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getButtonAt(index: number) {
    return element(by.css('app-root button'));
  }

  getRippleOverlay() {
    return element(by.css('app-root .k-ripple'));
  }
}
