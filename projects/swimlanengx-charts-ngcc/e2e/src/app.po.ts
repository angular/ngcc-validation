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
    return element(by.css(('.chart.line-chart.ng-tns-c15-1'))).getSize() as Promise<ISize>;
  }
}
