module.exports = {
    apps: [
        { 
            name: "IPISA",
            exec_mode: 'cluster',
            instances: 'max', 
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start',
            env: {
                NODE_ENV: "production",
                HOST: '0.0.0.0',
                PORT: 3000
            }
        }
    ]
}