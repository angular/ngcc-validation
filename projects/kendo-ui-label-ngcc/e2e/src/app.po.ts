import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getLabelAt(index: number) {
    return element.all(by.css('app-root label')).get(index);
  }

  getDropDownList() {
    return element(by.css('app-root kendo-dropdownlist'));
  }
}
