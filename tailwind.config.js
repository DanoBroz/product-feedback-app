/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{html,js,ts,tsx}'],
    darkMode: ['selector', '[data-mode="dark"]'],
    corePlugins: {
        preflight: false,
    },
    theme: {
        fontFamily: {
            sans: ['Jost', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                Purple: '#AD1FEA',
                Blue: {
                    lightest: '#62BCFA',
                    light: '#4661E6',
                    neutral: '#647196',
                    dark: '#3A4374',
                    darkest: '#4661E6',
                },
                shade: {
                    dark: '#F2F4FF',
                    neutral: '#F7F8FD',
                },
                Orange: '#F49F85',
                action: {
                    primary: '#AD1FEA',
                    secondary: '#3A4374',
                    info: '#4661E6',
                    danger: '#D73737',
                    contrast: '#F2F4FF',
                },
            },
        },
    },
}
