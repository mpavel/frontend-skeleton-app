import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

// docs: https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md
export default defineConfig({
  fixturesFolder: '**/spec/fixtures',
  e2e: {
    specPattern: '**/spec/**/*.feature',
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions,
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        createBundler({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});