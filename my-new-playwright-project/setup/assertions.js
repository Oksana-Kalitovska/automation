const chai = require('chai');

global.expect = chai.expect;   // Тепер ви можете використовувати expect у своїх тестах без імпортування chai у кожному файлі.
global.assert = chai.assert;
global.should = chai.should;