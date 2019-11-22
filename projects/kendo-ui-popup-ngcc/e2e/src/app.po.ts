import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo() {
    await browser.get(browser.baseUrl);
  }

  async togglePopup() {
    const button = element(by.css('app-root .k-button'));
    await button.click();
    await browser.sleep(100);
  }

  getContent() {
    return element(by.css('app-root .content'));
  }

  getTemplate() {
    return element(by.css('app-root .template'));
  }
}
