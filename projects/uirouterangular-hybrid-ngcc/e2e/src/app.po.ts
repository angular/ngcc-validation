import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    await browser.waitForAngularEnabled(false);
    await browser.get(browser.baseUrl);
  }

  async getAnchor() {
    return element(by.css('a')).getText();
  }

  async clickAnchor() {
    await element(by.css('a')).click();
  }

  async getChildMessage() {
    return element(by.css('p#child')).getText();
  }
}
