/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                keyframes: {
                    "bounce-in": {
                        "0%": {
                            opacity: "0",
                            transform: "scale(0.8)"
                        },
                        "50%": {
                            opacity: "1",
                            transform: "scale(1.05)"
                        },
                        "100%": {
                            transform: "scale(1)"
                        }
                    }
                },
                animation: {
                    "bounce-in": "bounce-in 0.6s ease-out"
                }
            },
        },
    },
    plugins: [],
};