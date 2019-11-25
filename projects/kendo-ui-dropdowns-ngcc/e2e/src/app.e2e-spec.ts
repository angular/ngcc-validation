import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('kendo-ui-dropdowns', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render an autocomplete', () => {
    page.navigateTo();
    expect(page.getAutoComplete().isPresent()).toBe(true);
  });

  it('should render a combobox', () => {
    page.navigateTo();
    expect(page.getComboBox().isPresent()).toBe(true);
  });

  it('should render a dropdownlist', () => {
    page.navigateTo();
    expect(page.getDropDownList().isPresent()).toBe(true);
  });

  it('should render a multiselect', () => {
    page.navigateTo();
    expect(page.getMultiSelect().isPresent()).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
