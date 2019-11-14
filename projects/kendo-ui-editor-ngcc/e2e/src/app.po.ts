import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getEditorElement() {
    return element(by.css('kendo-editor'));
  }
  getToolbarElement() {
    return element(by.css('kendo-editor kendo-toolbar-renderer'));
  }
  getToolbarButtonGroups() {
    return element.all(by.css('kendo-editor kendo-toolbar-renderer kendo-buttongroup'));
  }
}
