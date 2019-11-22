import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getComponent() {
    return element(by.css('app-root kendo-pdf-export'));
  }
}
