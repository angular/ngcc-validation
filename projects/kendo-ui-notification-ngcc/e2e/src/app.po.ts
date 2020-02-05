import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getButtonAt(index: number) {
    return element.all(by.css('app-root button')).get(index);
  }

  getNotificationText() {
    return element(by.css('.k-notification-content')).getText() as Promise<string>;
  }
}
