exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js', // Імпортує файл зі спеціальними кроками для об'єкта 'I'.
    LoginPage : './pages/LoginPage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'playwright-codecept'
};