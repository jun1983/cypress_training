import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,

  pageLoadTimeout: 60000,
  screenshotsFolder: "test-reports",
  video: true,
  videosFolder: "test-reports",
  videoUploadOnPasses: false,
  trashAssetsBeforeRuns: true,

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});