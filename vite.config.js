import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import browserSync from 'vite-plugin-browser-sync';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,  // Handles Blade/PHP/Livewire reloads
        }),
        tailwindcss(),
        browserSync(),
    ],
    server: {
        host: true,  // '0.0.0.0' for Sail
        hmr: {
            host: 'localhost',
        },
        watch: {
            usePolling: true,
            ignored: ['**/storage/framework/views/**'],
            interval: 100,
        },
    },
});
