import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getCalendar(): ElementFinder {
    return element(by.css('.k-calendar'));
  }

  getCalendarTitle(): ElementFinder {
    return element.all(by.css('.k-calendar .k-calendar-header .k-title')).get(0);
  }

  getDateInput(): ElementFinder {
    return element(by.css('.k-dateinput'));
  }

  getDatePicker(): ElementFinder {
    return element(by.css('.k-datepicker'));
  }

  async openDatePicker(): Promise<void> {
    await element(by.css('.k-datepicker .k-picker-wrap > .k-select')).click();
    await browser.sleep(300);
  }

  getDateRange(): ElementFinder {
    return element(by.css('kendo-daterange'));
  }

  async openDateRange(): Promise<void> {
    await element(by.css('kendo-daterange .k-dateinput:first-child')).click();
    await browser.sleep(300);
  }

  getDateTimePicker(): ElementFinder {
    return element(by.css('.k-datetimepicker'));
  }

  async openDateTimePicker(): Promise<void> {
    await element(by.css('.k-datetimepicker .k-picker-wrap > .k-select')).click();
    await browser.sleep(300);
  }

  getTimePicker(): ElementFinder {
    return element(by.css('.k-timepicker'));
  }

  async openTimePicker(): Promise<void> {
    await element(by.css('.k-timepicker .k-picker-wrap > .k-select')).click();
    await browser.sleep(300);
  }

  getMultiViewCalendar(): ElementFinder {
    return element(by.css('kendo-multiviewcalendar'));
  }

  getActivePopup(): ElementFinder {
    return element(by.css('.k-popup'));
  }

  getPopupCalendarTitle(): ElementFinder {
    return element(by.css('.k-popup .k-calendar .k-calendar-header .k-title'));
  }

  async scrollToPopupCalendarBottom(): Promise<void> {
    await browser.executeScript(`
      const contentArea = document.querySelector('.k-popup .k-content.k-scrollable');
      contentArea.scrollTop = contentArea.scrollHeight;
    `);
    await browser.sleep(100);
  }
}
