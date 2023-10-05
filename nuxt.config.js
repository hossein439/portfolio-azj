export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseUrl: process.env.BASE_URL,
        },
    },
    css: ['~/assets/css/custom.css'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
})
