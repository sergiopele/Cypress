const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://reqres.in/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  setupNodeEvents(on, config) {
    return require('./cypress/plugins/index.js')(on, config)
  },
});
