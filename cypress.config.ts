import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: './cypress/support/e2e.{ts, tsx}',
    specPattern: './cypress/spec/*.spec.{ts, tsx}',
  },
  downloadsFolder: './cypress/downloads',
  fileServerFolder: './cypress/fileServer',
  fixturesFolder: './cypress/fixtures',
  screenshotsFolder: './cypress/screenshots',
  videosFolder: './cypress/videos',
  supportFolder: './cypress/support',
  video: false,
});
