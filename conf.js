exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['**/**/*.protractor.js'],

  suites: {
   
    angularPage:'./src/protractor/angularPage/*.protractor.js',
    belatrixPage:'./src/protractor/belatrixPage/*.protractor.js'

  },

};