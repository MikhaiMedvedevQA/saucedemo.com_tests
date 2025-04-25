const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 768,
    viewportWidth: 1366,
    blockHosts: ["*mc.yandex.ru"],
    defaultBrowser: "chrome",
    baseUrl: "https://saucedemo.com"
  },
});

// Все параметры конфига: https://docs.cypress.io/guides/references/configuration
