var createPage= require('./pages/create.event.page.js');

describe('Belatrix Web Page', () => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.belatrixsf.com/');

        createPage = new createPage();

    it('Test1: Should show button chat', () => {
        
        let isPresent = false;
        elements = createPage.elements;

        elements.each((el, index) => {
            el.getAttribute('id').then(id => {
                browser.switchTo().frame(id);
                messagechat = createPage.messagechat;

                messagechat.isPresent().then(val => {
                    isPresent = val;

                    elements.count().then(c => {
                        if(index === c - 1) {
                            finish();
                        }
                    });
                });

                browser.switchTo().defaultContent();
            });
        });

        function finish() {
            expect(isPresent).toBe(true);
        }
    });

    it ('Test2: Should validate contact us option',() =>{
       
        CntacUs = createPage.CntacUs;
        var color = CntacUs.getCssValue('background-color'); 
        
        expect(CntacUs.isPresent()).toBe(true);
        expect(color).toEqual('rgba(248, 153, 55, 1)');
    
    });

    it ('Test3: Should validate our location option', () => { 
        locations = createPage.locations;
        expect(locations.count()).toEqual(5);    

        const countries = ['United States', 'Argentina', 'Peru', 'Colombia', 'Spain'];

        locations.each((el, index) => {
           expect(el.getAttribute('textContent')).toEqual(countries[index]);
        });
    });

    it ('Test4: Should validate Why Belatrix option', () => {
        reasons = createPage.reasons;
        expect(reasons.count()).toEqual(6);    

        const values = ['International presence', 'Nearshore advantages', 'Project governance', 'Agile expertise', 'Flexible engagement models','Our talent development'];

        reasons.each((el, index) => {
            expect(el.getAttribute('textContent')).toEqual(values[index]);
        });
     
    });

    it ('Test5: Should validate Social Network icons', () => {
        socialicon = createPage.socialicon;
        expect(socialicon.count()).toEqual(5); 
         
        const links = [
            'http://www.youtube.com/belatrixsf', 
            'https://www.instagram.com/belatrix.software/', 
            'http://www.linkedin.com/company/belatrix-software-factory', 
            'http://twitter.com/belatrixsf', 
            'https://www.facebook.com/BelatrixSoftware'
        ];

        socialicon.each((el, index) => {
            expect(el.getAttribute('href')).toEqual(links[index]);


        });
     
    });

    it ('Test6: Should exist read more button', () => {
        browser.get('https://www.belatrixsf.com/about-us/');

        const readmore= createPage.readmore;
        expect(readmore.count()).toEqual(10); 
         
        const text = 'READ MORE';

        readmore.each(el => {
            expect(el.getAttribute('textContent')).toEqual(text); 
        });
    });
    
    it ('Test7: Should exist Services option', () => {
        browser.get('https://www.belatrixsf.com/insights/');

        servicesopt = createPage.servicesopt
        expect(servicesopt.count()).toEqual(4); 
         
        const values = ['Software development', 'Software testing', 'Consultancy & innovation', 'User experience'];

        servicesopt.each((el,index )=> {
            expect(el.getAttribute('textContent')).toEqual(values[index]); 
        });
    });

    it ('Test8: Should exist Services, Industries, Insights, Why Belatrix option', () => {
        browser.get('https://www.belatrixsf.com/insights/');

        const servicesopc= createPage.servicesopc;
        expect(servicesopc.count()).toEqual(12); 
         
        const values = [
                        'Software development', 
                        'Software testing', 
                        'Consultancy & innovation', 
                        'User experience', 
                        'Fintech', 
                        'Media & entertainment', 
                        'Healthcare',
                        'All industries',
                        'Blog',
                        'Whitepapers',
                        'Webinars',
                        'Videos'
                        ];

        servicesopc.each((el,index )=> {
            expect(el.getAttribute('textContent')).toEqual(values[index]); 
        });
    });

    it ('Test9: Should exist Why Belatrix option', () => {
        browser.get('https://www.belatrixsf.com/insights/');

        const servicesopc2= createPage.servicesopc2;
        expect(servicesopc2.count()).toEqual(6); 
         
        const values = [
                        'International presence', 
                        'Nearshore advantages', 
                        'Project governance', 
                        'Agile expertise', 
                        'Flexible engagement models', 
                        'Our talent development', 
                       ];

        servicesopc2.each((el,index )=> {
            expect(el.getAttribute('textContent')).toEqual(values[index]); 
        });
    });

    it('Test10: should show input when user click on the search button', () => {
        let EC = protractor.ExpectedConditions;

        const searchButton = createPage.searchButton;
        searchButton.click();

        const inputSearch = createPage.inputSearch;
        browser.wait(EC.visibilityOf(inputSearch), 3000);

        inputSearch.isDisplayed().then(isVisible => expect(isVisible).toBe(true));
    });

    it('Test11: should show results from user query', () => {
        let EC = protractor.ExpectedConditions;

        const searchButton = createPage.searchButton;
        searchButton.click();

        const inputSearch = createPage.inputSearch;
        inputSearch.sendKeys('angular');

        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.wait(EC.urlIs('https://www.belatrixsf.com/'), 10000);

        const searchResult = element.all(by.css('article.search-results-box'));
        expect(searchResult.count()).toBeGreaterThan(0);
    });

        /*it('should work with async', async function() {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.belatrixsf.com/');

        let isPresent = false;
        const elements = element.all(by.css('iframe[title="chat widget"]'));
        const elCount = await elements.count();
        
        elements.each(async function(el, index) {
            const id = await el.getAttribute('id');
        });
    });*/

    it('Test12: should not show results from user query', () => {
        browser.get('https://www.belatrixsf.com/insights/');

        let EC = protractor.ExpectedConditions;

        const searchButton = createPage.searchButton;
        searchButton.click();

        const inputSearch = createPage.inputSearch;
        inputSearch.sendKeys('xxxxxx');

        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.wait(EC.urlIs('https://www.belatrixsf.com/'), 10000);

        const searchResult2 = element(by.css('div.p-type1 > p'));
        expect(searchResult2.getAttribute('textContent')).toContain('No search results for:');
    });

});