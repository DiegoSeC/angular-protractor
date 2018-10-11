import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('A test with TypeScript', () => {

  beforeEach(() => {
    browser.get('https://docs.angularjs.org/tutorial');
  });

  it('should have a title', () => {
    const el = element(by.id('phonecat-tutorial-app'));
    expect(el.getText()).toEqual('PhoneCat Tutorial App');
  });

});