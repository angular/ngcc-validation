import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getWindowComponent() {
    return element(by.css('.k-window'));
  }
}
