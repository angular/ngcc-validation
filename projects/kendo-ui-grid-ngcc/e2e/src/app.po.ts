import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getCell() {
    return element(by.css('kendo-grid kendo-grid-list tr:nth-child(3) > td:nth-child(3)'));
  }
}
