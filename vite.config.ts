import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 3000,
	},
	resolve: {
		alias: {
			"~/": `${__dirname}/src/`,
		},
	},
});
