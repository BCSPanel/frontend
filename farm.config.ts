import { defineConfig } from '@farmfe/core';

export default defineConfig({
  plugins: [
    '@farmfe/plugin-react',
  ],
  compilation: {
    output: {
      targetEnv: 'browser-esnext',
      publicPath: './',
      filename: "assets/[resourceName].[ext]",
      assetsFilename: "static/[resourceName].[ext]",
    },
    partialBundling: {
      targetConcurrentRequests: 1,
    },
    runtime: {
      isolate: true,
    },
    sourcemap: false,
    comments: false,
    progress: false,
  },
});
