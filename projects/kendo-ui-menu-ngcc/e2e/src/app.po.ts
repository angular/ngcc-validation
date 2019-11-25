import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getMenuItemAt(index: number) {
    return element.all(by.css('app-root .k-menu-item')).get(index);
  }
}
