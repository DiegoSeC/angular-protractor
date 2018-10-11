describe('Protractor Examples', () => {
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

    const link = element(by.tagName('a'));

    
    
  });
});