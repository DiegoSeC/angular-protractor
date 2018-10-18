exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  suites: {
   
    angularPage:'./src/protractor/angularPage/*.protractor.js',
    belatrixPage:'./src/protractor/belatrixPage/*.protractor.js'

  },

  specs: ['./tmp/**/**/*.protractor.js']
};