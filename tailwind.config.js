/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
        extend: {
            fontFamily: {
                breeSerif: ["Bree Serif", "serif"],
                redHatText: ["Red Hat Text", "sans-serif"],
                redHatDisplay: ["Red Hat Display", "sans-serif"],
            },
        },
    },

    plugins: [],
}
