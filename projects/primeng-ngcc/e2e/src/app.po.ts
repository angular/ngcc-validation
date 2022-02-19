import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTableHeaderText() {
    return element(by.css('thead')).getText();
  }
}
