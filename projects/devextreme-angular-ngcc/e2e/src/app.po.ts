import { browser, by, element } from 'protractor';

export class AppPage {
  private button = element(by.css('dx-button'));

  navigateTo() {
    return browser.get(browser.baseUrl);
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getChartText() {
    return element(by.css('dx-chart')).getText();
  }

  getButtonText() {
    return this.button.getText();
  }

  clickButton() {
    return this.button.click();
  }
}
