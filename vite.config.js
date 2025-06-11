import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
  plugins: [
    {
      name: 'buffer-polyfill',
      transformIndexHtml(html) {
        return {
          html,
          tags: [
            {
              tag: 'script',
              attrs: { type: 'module' },
              children: `
                import { Buffer } from 'buffer-es6';
                window.Buffer = Buffer;
                globalThis.Buffer = Buffer;
              `,
              injectTo: 'head',
            },
          ],
        };
      },
    },
    topLevelAwait(),
    nodePolyfills({
      include: ["buffer", "process", "util", "stream", "crypto"],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
  optimizeDeps: {
    exclude: [
      "@noir-lang/noirc_abi",
      "@noir-lang/acvm_js",
      "@aztec/bb.js",
    ],
    include: ['buffer-es6'],
  },
  resolve: {
    alias: {
      "pino": "pino/browser",
      "pino/browser": "pino/browser",
      "buffer": "buffer-es6",
    },
  },
  build: {
    rollupOptions: {
      external: ["pino", "pino/browser"],
      plugins: [
        nodePolyfills({
          include: ["buffer", "process", "util", "stream", "crypto"],
        }),
      ],
    },
  },
});
