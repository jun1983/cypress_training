import { defineConfig } from 'cypress'
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";


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
    baseUrl: 'https://obstaclecourse.tricentis.com/Obstacles',
    specPattern: "**/*.cy.ts",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});