const require = require('playwright') // імпортує бібліотеку Playwright для використання її функціональності у файлі.
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber');  // імпортує необхідні функції з бібліотеки Cucumber для налаштування хуків.

BeforeAll(async function () {
    // Цей хук виконується один раз перед усіма сценаріями.
    // Тут можна ініціалізувати глобальні ресурси, наприклад, запуск браузера.
    console.log('Launch Browser');
    global.browser = await require.chromium.launch({ headless: false }); // Запускає браузер Chromium у видимому режимі.
});

AfterAll(async function () {
    // Цей хук виконується один раз після всіх сценаріїв.
    // Тут можна звільнити глобальні ресурси, наприклад, закрити браузер.
    console.log('Close Browser');
    await global.browser.close(); // Закриває браузер.
}
);

Before(async function (scenario) {
    // Цей хук виконується перед кожним сценарієм.
    // Тут можна створити новий контекст і сторінку для кожного сценарію.
    console.log(`Start Scenario: ${scenario.pickle.name}`);
    global.context = await global.browser.newContext(); // Створює новий контекст браузера.
    global.page = await global.context.newPage(); // Створює нову сторінку в цьому контексті.
}
);

After(async function (scenario) {
    // Цей хук виконується після кожного сценарію.
    // Тут можна закрити сторінку і контекст, а також обробити результати сценарію.
    console.log(`End Scenario: ${scenario.pickle.name}`);
    await global.page.close(); // Закриває сторінку.
    await global.context.close(); // Закриває контекст браузера.
});