import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-svelte'],
  vite: ({ mode }) => ({
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    resolve: {
      conditions: ['browser', mode]
    }
  }),

  manifest: {
    name: 'News Perspective',
    description: 'A browser extension to analyze news articles.',
    permissions: ['activeTab', 'scripting'],
    host_permissions: ['https://cs489-newsperspective-backend-production.up.railway.app/*']
  }
});
