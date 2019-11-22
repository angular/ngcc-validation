import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getItemAt(index: number) {
    return element.all(by.css('app-root .item')).get(index);
  }
}
