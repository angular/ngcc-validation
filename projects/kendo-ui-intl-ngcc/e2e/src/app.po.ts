import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getFormattedNumber() {
    return element(by.css('app-root .number')).getText() as Promise<string>;
  }

  getFormattedDate() {
    return element(by.css('app-root .date')).getText() as Promise<string>;
  }
}
