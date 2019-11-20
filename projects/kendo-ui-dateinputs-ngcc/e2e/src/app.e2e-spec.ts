import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should display a calendar', () => {
    expect(page.getCalendar().isPresent()).toBe(true);
  });

  it('should not throw on calendar view change when switching between a view with a template and one without', async () => {
    const initialTitle = await page.getCalendarTitle().getText();
    await page.getCalendarTitle().click();
    const currentTitle = await page.getCalendarTitle().getText();

    expect(currentTitle).not.toEqual(initialTitle);
  });

  it('should display a dateinput', () => {
    expect(page.getDateInput().isPresent()).toBe(true);
  });

  it('should display and open the datepicker', async () => {
    expect(page.getDatePicker().isPresent()).toBe(true);

    await page.openDatePicker();
    expect(page.getActivePopup().isPresent()).toBe(true);
  });

  it('should navigate to an upper view when the title is clicked', async () => {
    await page.openDatePicker();
    const initialTitle = await page.getPopupCalendarTitle().getText();
    await page.getPopupCalendarTitle().click();
    const currentTitle = await page.getPopupCalendarTitle().getText();

    expect(currentTitle).not.toEqual(initialTitle);
  });

  it('should use the provided navigation title template in the datetimepicker', async () => {
    await page.openDateTimePicker();
    const title = await page.getPopupCalendarTitle().getText();

    expect(title).toContain('!');
  });

  it('should scroll to the bottom of the datepicker view without throwing', async () => {
    await page.openDatePicker();
    expect(() => page.scrollToPopupCalendarBottom()).not.toThrow();
  });

  it('should display and open the daterange', async () => {
    expect(page.getDateRange().isPresent()).toBe(true);

    await page.openDateRange();
    expect(page.getActivePopup().isPresent()).toBe(true);
  });

  it('should display and open the datetimepicker', async () => {
    expect(page.getDateTimePicker().isPresent()).toBe(true);

    await page.openDateTimePicker();
    expect(page.getActivePopup().isPresent()).toBe(true);
  });

  it('should display and open the timepicker', async () => {
    expect(page.getTimePicker().isPresent()).toBe(true);

    await page.openTimePicker();
    expect(page.getActivePopup().isPresent()).toBe(true);
  });

  it('should display a multiviewcalendar', () => {
    expect(page.getMultiViewCalendar().isPresent()).toBe(true);
  });
});
