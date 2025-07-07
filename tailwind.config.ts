import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.ts',
        './resources/js/**/*.tsx',
        './resources/js/**/*.vue',

        // Add vendor paths manually
        '../../vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    ],
    theme: {
        extend: {},
    },
    plugins: [animate],
};

export default config;
