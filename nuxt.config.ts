export default defineNuxtConfig({
    modules: ["@pinia/nuxt", "@nuxtjs/google-fonts", "@nuxt/image", "@invictus.codes/nuxt-vuetify"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/assets/css/main.css"],
    googleFonts: {
        families: {
            "Noto Sans Armenian": [100, 200, 300, 400, 500, 600, 700, 800, 900],
            "Rubik": [400]
        }
    },
    image: {
        domains: ["tour-page-lovat"],
        format: ['webp'],
        dir: 'assets/img'
    }
})
