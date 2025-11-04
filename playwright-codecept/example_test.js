Feature('My test suite');

Scenario('Should load a Demoblaze website - test1',  ({ I }) => {
I.amOnPage('https://www.demoblaze.com/index.html');
I.see('PRODUCT STORE');
I.dontSee('Googlex');
I.seeElement('//a[text()="Home "]');
I.dontSeeElement('h1');


});

Scenario('Should load a Demoblaze website   - test2',  ({ I }) => {
I.amOnPage('https://www.demoblaze.com/index.html');
I.see('PRODUCT STORE');
I.dontSee('Googlex');
I.seeElement('//a[text()="Home "]');
I.dontSeeElement('h1');


});


Scenario('Should load a Demoblaze website - test3',  ({ I }) => {
I.amOnPage('https://www.demoblaze.com/index.html');
I.see('PRODUCT STORE');
I.dontSee('Googlex');
I.seeElement('//a[text()="Home "]');
I.dontSeeElement('h1');


});
