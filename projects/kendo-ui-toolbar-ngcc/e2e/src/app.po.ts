import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getToolbarElement() {
    return element(by.css('kendo-toolbar'));
  }
  getFirstButton() {
    return element(by.css('kendo-toolbar-renderer:first-child button'));
  }
}
