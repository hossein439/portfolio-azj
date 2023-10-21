export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            baseUrl: process.env.BASE_URL,
        },
    },
    css: ['~/assets/css/custom.css', '~/assets/css/aos.css'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    plugins: [
        {
            src: '~/plugins/animation.client.js',
            mode: 'client'
        }
        // {src: '~/plugins/splide.client.js', mode: 'client'}
    ]
})
