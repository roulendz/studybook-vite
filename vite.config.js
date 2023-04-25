// themes/your-theme/vite.config.ts
import { defineConfig } from 'vite'
import { resolve, basename } from 'path'
import ViteRestart from 'vite-plugin-restart';

// Your JS/TS/CSS entrypoints.
const input = {
    globalJs: resolve(__dirname, 'assets/src/js/app.js'),
    indexPageJs: resolve(__dirname, 'pages/index/index.js'),
    css: resolve(__dirname, 'assets/src/css/app.css'),
}

// Auto detect the theme name, works only if one theme is available.
// const themeName = __dirname.match(/themes//([^//]+)/)[1];
const themeName = 'studybook-vite'

export default defineConfig({
    // Included assets will use this path as the base URL.
    base: `/themes/${themeName}/`,
    build: {
        rollupOptions: { input },
        manifest: true,
        emptyOutDir: true,
        // Output assets to /themes/your-theme/assets/build
        outDir: resolve(__dirname, 'assets/build'),
    },
    plugins: [
        ViteRestart({
          reload: [
            './content/**/*.htm',
            './layouts/*.htm',
            './pages/**/*.htm',
            './partials/**/*.htm'
          ],
        }),
      ],
    server: {
        hmr: {
            // Do not use encrypted connections for the HMR websocket.
            protocol: 'ws',
        },
        fs: {
            // Allow serving files from these directories.
            allow: ['../../'],
        },
    }
})