import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getOverlay() {
    return element(by.css('body > app-root > ngx-spinner > div'));
  }
}
