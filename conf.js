exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
<<<<<<< HEAD
  specs: ['**/**/*.protractor.js'],

  suites: {
   
    angularPage:'./src/protractor/angularPage/*.protractor.js',
    belatrixPage:'./src/protractor/belatrixPage/*.protractor.js'

  },

=======
  specs: ['./tmp/**/**/*.protractor.js']
>>>>>>> 145bf6b09f8ef75a71a0d66a352c4a4226c420ce
};