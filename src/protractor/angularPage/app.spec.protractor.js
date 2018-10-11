/*describe('Protractor Examples', () => {
  it('should have title', () => {
    browser.get('http://0.0.0.0:8080/');

    const el = element(by.css('.title'));
    
    expect(el).toBeDefined();
  });

  it('shoud have title with value "Hello from Angular !"', () => {
    browser.get('http://0.0.0.0:8080/');
    const el = element(by.css('.title'));

    el.getText().then((text) => {
      expect(text).toEqual('Hello from Angular !');
    });
    
  });

  it('shoud have title with value "Webpack Angular Starter"', () => {
    browser.get('http://0.0.0.0:8080/');
    const el = element(by.tagName('a'));

    el.getText().then(text => {
      expect(text).toEqual('Webpack Angular Starter');
    }); 
  });

  it('should have blue background', () => {
    browser.get('http://0.0.0.0:8080/');
    const el = element(by.tagName('body'))
    const color = el.getCssValue('background-color');
    expect(color).toEqual('rgba(1, 71, 167, 1)');
  });

  it('should have 2 titles', () => {
    browser.get('http://0.0.0.0:8080/');
    const titles = element.all(by.css('.title')).count();
    expect(titles).toEqual(2);
  });
});*/