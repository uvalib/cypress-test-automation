const { defineConfig } = require('cypress');

module.exports = defineConfig({
  "video": false,
  "screenshotOnRunFailure": false,
  "defaultCommandTimeout": 30000,
  "requestTimeout": 30000,
  "responseTimeout": 60000,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          // Then to see the log messages in the terminal
          //   cy.task("log", "my message");
          console.log("    " + message );
          return null;
        },
      });
    }
  }
});
