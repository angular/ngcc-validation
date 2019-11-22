import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getLabelAt(index: number) {
    return element.all(by.css('app-root label')).get(index);
  }

  getDropDownWrap() {
    return element(by.css('app-root .k-dropdown-wrap'));
  }
}
