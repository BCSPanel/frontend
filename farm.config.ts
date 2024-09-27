import { defineConfig } from '@farmfe/core';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    '@farmfe/plugin-react',
  ],
  vitePlugins: [
    viteCompression({ algorithm: "brotliCompress" }),
    viteCompression({ algorithm: "gzip" }),
    {
      name: 'afterbuild',
      apply: 'build',
      transformIndexHtml(html: string) {
        return html.replace(/\n\s*/g, '')
      },
    },
  ],
  compilation: {
    output: {
      targetEnv: 'browser-esnext',
      publicPath: './',
      filename: "assets/[resourceName].[ext]",
      assetsFilename: "assets/[resourceName].[ext]",
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
