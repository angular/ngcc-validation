import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  async hasClass(el: ElementFinder, clsName: string): Promise<boolean> {
    const clsAttr: string = await el.getAttribute('class');
    const clsNames: string[] = clsAttr.split(' ');
    return clsNames.indexOf(clsName) >= 0;
  }

  async getListItem(index: number): Promise<ElementFinder> {
    const listItem: ElementFinder = await element
      .all(by.css('app-root ul.list > li.list-item'))
      .get(index);
    return listItem;
  }

  async scrollTo(el: ElementFinder): Promise<void> {
    await browser
      .actions()
      .mouseMove(el)
      .perform();
    await browser.sleep(1000);
  }
}
