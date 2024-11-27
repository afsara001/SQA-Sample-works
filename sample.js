
const { Builder } = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.manage().window().maximize();
        await driver.get("https://www.demoblaze.com/");
        console.log('Page loaded. Waiting for 5 seconds...');
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
    } catch (error) {
        console.error('An error occurred:', error);
    } 
}

example();
