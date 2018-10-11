module.exports = function() {

  /* Test1: Should show button chat */  
   this.elements = element.all(by.css('iframe[title="chat widget"]'));

   this.messagechat = element(by.id('tawkchat-status-icon'));
 
  /* Test2: Should validate contact us option */ 
   this.CntacUs = element (by.css('a[title="CONTACT US"]'));
   
  /* Test3: Should validate our location option */
   this.locations = element.all(by.css('div.info > h3.highlight-1.white-text.my-transition'));

  /* Test4: Should validate Why Belatrix option */
   this.reasons = element.all(by.css('div.inner-box.text-center > h2.highlight-1.white-text'));

  /* Test5: Should validate Social Network icons */ 
  this.socialicon = element.all(by.css('div.p-2.social > a'));

  /* Test6: Should exist read more button */
  this.readmore = element.all(by.css('span.align-middle'));

  /* Test7: Should exist Services option */
  this.servicesopt = element.all(by.css('div.white-box.my-transition > div.inner-wb.inner-wb-icon > h2.highlight-3'));

  /* Test8: Should exist Services, Industries, Insights, Why Belatrix option */
  this.servicesopc = element.all(by.css('div.white-box.my-transition > div.inner-wb > h2.highlight-3'));
  
  /* Test9: Should exist Why Belatrix option */
  this.servicesopc2 = element.all(by.css('div.white-box.my-transition > div.inner-wb > h2.highlight-1'));

  /** Test10: should show input when user click on the search button */
  this.searchButton = element(by.css('li.searchit'));

  this.inputSearch = element(by.id('s'));

  /** Test11: should show results from user query */
  this.searchResult = element.all(by.css('article.search-results-box'));

  /** Test12: should not show results from user query */
  this.searchResult2 = element(by.css('div.p-type1 > p'));

}