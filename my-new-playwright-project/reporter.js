const reporter = require('cucumber-html-reporter'); // Імпортує бібліотеку для створення HTML-звітів з результатами тестування.

const options = {
    theme: 'bootstrap', // Встановлює тему звіту.
    jsonFile: 'my-new-playwright-project/reports/cucumber_report.json', // Вказує шлях до JSON-файлу з результатами тестування.
    output: 'my-new-playwright-project/reports/cucumber_report.html', // Вказує шлях до вихідного HTML-файлу звіту.
    reportSuiteAsScenarios: true, // Дозволяє відображати набори тестів як сценарії.
    scenarioTimestamp: true, // Додає мітки часу до сценаріїв.
    launchReport: false, // Не відкривати звіт автоматично після завершення тестування.
    metadata: {
        "App Version": "0.1.0",
        "Test Environment": "STAGING",
        "Browser": "Chrome 54.0",
        "Platform": "Windows 10"
    }
};

reporter.generate(options); // Генерує HTML-звіт на основі вказаних опцій.

// npm run report - команда для генерації звіту з терміналу.
// npm run test - команда для запуску тестів з терміналу.