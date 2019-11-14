import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getAutoComplete() {
    return element(by.css('.k-autocomplete'));
  }

  getComboBox() {
    return element(by.css('.k-combobox'));
  }

  getDropDownList() {
    return element(by.css('.k-dropdown'));
  }

  getMultiSelect() {
    return element(by.css('.k-multiselect'));
  }
}
