export default defineNuxtConfig({
    runtimeConfig: {

        keyJwtToken: process.env.KEY_JWT_TOKEN,
        supabaseUrl: process.env.SUPBASE_URL,
        supabaseKey: process.env.SUPABASE_KEY,

        public: {
            baseUrl: process.env.BASE_URL,
        },
    },
    css: ['~/assets/css/custom.css'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        [
            '@vee-validate/nuxt',
        ]
    ],
    plugins: [
        {
            src: '~/plugins/animation.client.js',
            mode: 'client'
        },
    ],

    serverMiddleware: [
        { path: '/api', handler: '~/server/middleware/auth-server.js' },
    ],

})
