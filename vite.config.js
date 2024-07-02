// vite.config.js
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import nodePolyfills from "vite-plugin-node-stdlib-browser";

export default defineConfig({
	build: {
		lib: {
			// 複数のエントリーポイントのディクショナリや配列にもできます
			entry: resolve(__dirname, "src/main.ts"),
			name: "murlifier",
			fileName: "murlifier",
			formats: ["es"],
		},
	},
	test: {
		include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
	},
	plugins: [dts({ rollupTypes: true }), nodePolyfills()],
});
