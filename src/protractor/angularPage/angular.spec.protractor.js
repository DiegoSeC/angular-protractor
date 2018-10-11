describe('Angular page', () => { 

 browser.get('http://todomvc.com/examples/angularjs/#/'); 

    /* Prueba1: Validar existencia de cuadro de texto */
    it('Should show Textbox', () => {
        
        const caja = element(by.model('newTodo'));
        expect(caja.isPresent()).toBeTruthy();
        
    });
    
    /* Prueba2: Validar que se agreguen 5 items */
    it('Should write and add text (5 items)', () => {
     
        const caja = element(by.model('newTodo'));
        expect(caja.isPresent()).toBeTruthy();

        ['item1', 'item2', 'item3', 'item4', 'item5'].forEach(item => {
            caja.sendKeys(item);
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
        });

        const registro = element.all(by.repeater('todo in todos'));
        expect(registro.count()).toEqual(5);


    });

    /** Prueba3: Validar que se marquen 3 items como complete */
    it('Should mark as completed (3 items)', () => {
        
        const check = element.all(by.model('todo.completed'));
        expect(check.isPresent()).toBeTruthy();
        expect(check.count()).toEqual(5);
        
        
        check.each((element, index) => {
            if(index < 3) {
                element.click();
            }
        });
        
        const itemcompleted = element.all(by.className('completed'));
        expect(itemcompleted.count()).toEqual(3);

     
    });

    /** Prueba4: Validar lista de items activos */
    it('Should show validate active registers', () => {

        const active = element(by.linkText('Active'));
        active.click();

        const item = element.all(by.css('label.ng-binding'));
        expect(item.count()).toEqual(2);

        
    });

    /** Prueba5: Validar todos los items  */
    it('Should show all registers', () => {

        const all = element(by.linkText('All'));
        all.click();

        const item = element.all(by.css('label.ng-binding'));
        expect(item.count()).toEqual(5);

        
    });

    /** Prueba 6: Validar mensaje "items left" */
    it('Should  validate the message items left', () => {

        const message = element(by.css('strong.ng-binding'));
        expect(message.getAttribute('textContent')).toEqual('2');

     
    });    

    /** Prueba 7: Validar hide button en opcion All */
    it('Should  validate hide button / option ALL', () => {
        
        /** Clic en boton Hidden - Marcar todos los items - all */
        const hideButton = element(by.xpath('/html/body/ng-view/section/section/label'));
        hideButton.click();
        const completed = element.all(by.className('completed'));
        expect(completed.count()).toEqual(5);

        /** Clic en el boton Hidden - Desmarcar todos los items - all */
        hideButton.click();
        const notcompleted = element.all(by.repeater('todo in todos'));
        let scope = ['ng-scope','ng-scope','ng-scope','ng-scope','ng-scope']
        expect(notcompleted.getAttribute('className')).toEqual(scope);

        /** Clic en boton Hidden - Ocultar todos los items - active*/
        const active = element(by.linkText('Active'));
        active.click();
        hideButton.click();
        const message = element(by.css('strong.ng-binding'));
        expect(message.getAttribute('textContent')).toEqual('0');
 
        /** Clic en boton Hidden - Mostrar todos los items - active*/
        hideButton.click();
        expect(message.getAttribute('textContent')).toEqual('5');

        /** Clic en boton Hidden - Mostrar vacio - Completed */
        const completedOpt = element(by.linkText('Completed'));
        completedOpt.click();
        expect(message.getAttribute('textContent')).toEqual('5');
        
        

        /** Clic en boton Hidden - Mostrar marcados todos los items - Completed */
        hideButton.click();
        expect(message.getAttribute('textContent')).toEqual('0');
        const itemcompleted = element.all(by.className('completed'));
        expect(itemcompleted.count()).toEqual(5);

    }); 

     
    /** Prueba 8: Validar existencia de boton Clear completed */
    /** Prueba 9: Validar boton Clear completed */
    it('Should  validate Clear completed button', () => {

        const buttonClear = element(by.className('clear-completed'));
        expect(buttonClear.isPresent()).toBeTruthy;
        buttonClear.click();
        const registro = element.all(by.repeater('todo in todos'));
        expect(registro.count()).toEqual(0);

     
    });     

    
    /** Prueba 10: Validar botones aspa */
    it('Should remove text', () => {
        browser.get('http://todomvc.com/examples/angularjs/#/');  
        const caja = element(by.model('newTodo'));
        caja.sendKeys('item1');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

        const firstElement = element(by.repeater('todo in todos'));
        expect(firstElement.isPresent()).toBeTruthy();

        browser.actions().mouseMove(firstElement).perform();

         const remove = element(by.className('destroy'));
         expect(remove.isPresent()).toBeTruthy;

         remove.click();
        
         const registro = element.all(by.repeater('todo in todos'));
         expect(registro.count()).toEqual(0);
    
    });

 
});