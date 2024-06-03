import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import viteCompression from 'vite-plugin-compression'
import htmlMinimize from '@sergeymakinen/vite-plugin-html-minimize'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		// 监听所有地址（包括局域网与公网），方便内网调试
		host: '0.0.0.0',
		proxy: {
			'^/api(-login)?/': 'http://0.0.0.0',
		},
	},
	base: './',
	plugins: [
		vue(),
		vueJsx(),
		mockDevServerPlugin(),
		// viteCompression({
		//   algorithm: 'gzip',
		//   threshold: 1024,
		//   verbose: false,
		//   deleteOriginFile: false
		// }),
		htmlMinimize({
			minifierOptions: {
				collapseWhitespace: true,
				html5: true,
				keepClosingSlash: false,
				minifyCSS: true,
				minifyJS: true,
				removeAttributeQuotes: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
			}
		}),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		{
			// script执行前阻止网页渲染
			// https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script
			name: "scriptBlockingRender",
			transformIndexHtml(html) {
				return html.replaceAll(
					'<script type="module"',
					'<script type="module" blocking="render" async'
				);
			}
		},
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		target: 'es2022',
		reportCompressedSize: true, // 是否使用vite自带的方式打印压缩后的大小
		rollupOptions: {
			output: {
				entryFileNames: `assets/[name].[hash].js`,
				chunkFileNames: `assets/[name].[hash].js`,
				assetFileNames: `assets/[name].[hash].[ext]`,
			}
		},
		modulePreload: {
			polyfill: false,
		},
		chunkSizeWarningLimit: Infinity,
		cssCodeSplit: false,
		assetsInlineLimit: 0,
	}
})
