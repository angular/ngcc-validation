import { browser, by, element } from 'protractor';
import { ISize } from 'selenium-webdriver';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getChartSize() {
    return element(by.css(('svg.ngx-charts'))).getSize() as Promise<ISize>;
  }
}
