import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    await browser.waitForAngularEnabled(false);
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getAnchor() {
    return element(by.css('a')).getText() as Promise<string>;
  }

  async clickAnchor() {
    await element(by.css('a')).click();
  }

  getChildMessage() {
    return element(by.css('p#child')).getText(); 
  }
}
