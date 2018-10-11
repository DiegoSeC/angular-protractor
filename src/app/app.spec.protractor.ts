import {browser, element, by, ExpectedConditions, ElementFinder} from 'protractor';

describe('A test with TypeScript', () => {

  beforeEach(() => {
    browser.get('https://docs.angularjs.org/tutorial');
  });

  it('should have a title', () => {
    const el = element(by.id('phonecat-tutorial-app'));
    expect(el.getText()).toEqual('PhoneCat Tutorial App');
  });

  it('should have an env title', () => {
    const el = element(by.id('environment-setup'));
    expect(el.getText()).toEqual('Environment Setup');
  });

  it('should have an image PhoneCat Tutorial App', () => {
    const img = element(by.className('diagram'));
    expect(img.isPresent()).toBeTruthy();
  });

  

});
