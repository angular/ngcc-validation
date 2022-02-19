import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  clickButton() {
    return element(by.css('button')).click();
  }

  getLabelText() {
    return element(by.css('span')).getText() as Promise<string>;
  }
}
