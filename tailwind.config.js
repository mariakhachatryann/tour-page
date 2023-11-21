/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
    extend: {
        colors: {
            primaryLight: "#A1C2E7",
            primaryDark: "#4385CE",
            primaryBlue: "#1467C2",
            transparentCol: "rgba(0, 10, 21, 0.50)",
            primaryGrey: "#4D545B"
        },
        fontFamily: {

        },
        screens: {
            "sm": { "max": "360px" },
            "sm1": { "max": "450px" },
            "md": { "max": "768px" },
            "mdmax": { "max": "950px" },
            "lg": { "max": "1024px" },
            "lgmax": { "max": "1260px" },
            "lgmin": "1024px",
            "xl1": { "max": "1465px" },
            "xl1min": "1465px",
            "xlmin": "1366px",
            "xl": { "max": "1366px" },
            "2xl": { "max": "1920px" }
        }
    },
    image: {
        dir: 'assets/img/'
      }
    },
    plugins: [],
}

