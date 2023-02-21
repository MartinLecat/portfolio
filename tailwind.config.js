/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,twig}"
    ],
    theme: {
        extend: {
            fontFamily: {
                "noto-serif": ['"Noto Serif"', "serif"]
            },
            height: {
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
            },
            borderWidth: {
                '3': '3px',
                '5': '5px',
                '6': '6px',
                '7': '7px',
            },
            minHeight: ({ theme }) => ({
                ...theme('spacing'),
            }),
        },
        keyframes: {
            fadeIn: {
                "0%": { opacity: 0},
                "100%": { opacity: 100},
            },
            fadeOut: {
                "0%": { opacity: 100},
                "100%": { opacity: 0},
            }
        },
        animation: {
            "fadeIn": "fadeIn 1s ease-in-out",
            "fadeOut": "fadeOut 1s ease-in-out",
        },
        backgroundImage: {
          "light": 'url("../assets/app-bg-light.svg"), none;',
          "dark": 'url("../assets/app-bg-dark.svg"), none;',
        }
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
