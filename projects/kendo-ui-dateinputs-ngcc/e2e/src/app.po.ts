import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTodayCell() {
    return element(by.css('td.k-today')).getText() as Promise<string>;
  }
}
