import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  openColorPicker() {
    return element(by.css('body > app-root > input')).click();
  }

  getColorPickerVisibility() {
    return element(by.css('body > app-root > color-picker > div')).isDisplayed() as Promise<boolean>;
  }
}
