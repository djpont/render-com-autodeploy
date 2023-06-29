import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
	root: './',
	resolve: {
		alias: {
			'src': path.resolve(__dirname, './src'),
		},
	},
	server: {
		port: Number(process.env.CLIENT_PORT) || 3000,
	},
	preview: {
		port: Number(process.env.CLIENT_PORT) || 3000,
	},
	define: {
		__SERVER_PORT__: process.env.SERVER_PORT || 5000,
	},
	plugins: [react()],
});
