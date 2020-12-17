import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getButtonAt(index: number) {
    return element.all(by.css('app-root button')).get(index);
  }

  async isRippleTarget(elem: ElementFinder) {
    const classes = (await elem.getAttribute('class')).split(' ');
    return classes.indexOf('k-ripple-target') !== -1;
  }

  async clickRippleEnabledButton(button: ElementFinder) {
    // For the `k-ripple-target` class to be removed after the ripple animation,
    // there must be a `mouseup` event after the triggering `mousedown`.
    await browser.actions().mouseDown(button).mouseUp(button).perform();
  }
}
