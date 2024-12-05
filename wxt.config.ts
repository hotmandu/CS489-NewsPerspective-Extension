import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-svelte'],

  manifest: {
    name: 'News Perspective',
    description: 'A browser extension to analyze news articles.',
    permissions: ['activeTab', 'scripting'],
    host_permissions: ['https://cs489-newsperspective-backend-production.up.railway.app/*']
  }
});
