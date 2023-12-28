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
    hooks: {
        fetch: {
            before(ctx) {
                // Add your custom interceptor logic here
                console.log('Before fetch');
            },
            async error(ctx, error) {
                // Handle fetch errors
                console.error('Fetch error:', error);
                // You can also throw the error to propagate it to the component
                throw error;
            },
            async success(ctx, { response }) {
                // Handle successful fetch
                console.log('Successful fetch:', response);
                // You can modify the response before it reaches the component
                // For example, add a custom property to the context
                ctx.customData = 'This is custom data from the fetch hook';
            },
            async after(ctx) {
                // Add your custom logic after fetch
                console.log('After fetch');
            },
        },
    },

    // serverMiddleware: [
    //     { path: '/api', handler: '~/server/index.js' },
    // ],

})
