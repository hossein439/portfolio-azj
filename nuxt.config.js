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
    plugins: [
        {
            src: '~/plugins/animation.client.js',
            mode: 'client'
        },
    ],

})
