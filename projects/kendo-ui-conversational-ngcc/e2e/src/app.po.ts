import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getMessageText() {
    return element(by.css('app-root .k-message .k-bubble')).getText() as Promise<string>;
  }
}
