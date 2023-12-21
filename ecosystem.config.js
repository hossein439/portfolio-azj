module.exports = {
    apps: [
        {
            name: 'nuxt-app',
            script: ".output/server/index.mjs",
            env: {
                "PORT": 3001,
            }
        }
    ]
}