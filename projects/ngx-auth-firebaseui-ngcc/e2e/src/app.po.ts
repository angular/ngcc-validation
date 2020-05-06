import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): PromiseLike<void> {
    return browser.get(browser.baseUrl);
  }

  getTitleText(): PromiseLike<string> {
    return element(by.css('app-root h1')).getText();
  }

  getAuthStateText(): PromiseLike<string> {
    return element(by.css('ngx-auth-firebaseui-user')).getText();
  }
}
