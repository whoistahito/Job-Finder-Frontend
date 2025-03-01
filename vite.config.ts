import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {config} from 'dotenv';

config();
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': process.env
    },
    optimizeDeps: {
        exclude: ['lucide-react'],
    },
    server: {
        port: process.env.PORT ? parseInt(process.env.PORT) : 3000, // Use the PORT from environment variables if available
        host: '0.0.0.0', // Make the server accessible from external IPs
    },
    preview: {
        port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
        host: '0.0.0.0',
    },
});