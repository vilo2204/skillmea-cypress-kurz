const { defineConfig } = require("cypress");
 // import { resetDb } from './cypress/tasks/resetDb'

module.exports = defineConfig({
  projectId: 'nvrnry',
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {

      // task
     //  on('task', { 
     //   reset: resetDb
     //  })

      // config
      // config.baseUrl = process.env.CI ? 'https://skillmea.sk' : 'http://localhost:3000'
      // return config
    },
    // specPattern: '**/headless/*.cy.{js,ts}',
    excludeSpecPattern: '**/headless/*.cy.{js,ts}',
    baseUrl: 'http://localhost:3000',
    experimentalWebKitSupport: true,
    env: {
      user: 'vilo'
    // requestMode: true
    }
  }
});
