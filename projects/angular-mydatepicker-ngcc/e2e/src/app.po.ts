import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  async selectCurrentDate() {
    await element(by.css('input')).click();
    await element(by.css('.myDpMarkCurrDay')).click();
  }

  getDateText() {
    return element(by.css('p')).getText() as Promise<string>;
  }
}
