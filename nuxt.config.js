// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseUrl: process.env.BASE_URL,
        },
    },
    // axios: {
    //     // Do away with the baseUrl when using proxy
    //     proxy: true
    // },
    // proxy: {
    //     // Simple proxy
    //     "/api/": {
    //         target: "http://localhost:4000",
    //         pathRewrite: { "^/api/": "" }
    //     }
    // },
    css: ['~/assets/css/custom.css'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
})
