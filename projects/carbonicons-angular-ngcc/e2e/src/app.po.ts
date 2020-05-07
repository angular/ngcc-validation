import { browser, by, element } from 'protractor';

export class AppPage {
  downloadIcon = element(by.css('ibm-icon-download'));

  navigateTo(): PromiseLike<void> {
    return browser.get(browser.baseUrl);
  }

  getTitleText(): PromiseLike<string> {
    return element(by.css('app-root h1')).getText();
  }
}
