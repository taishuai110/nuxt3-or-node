// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['element-plus/dist/index.css'],
  nitro: {
    devProxy: {
      '/home': {
        target: 'http://127.0.0.1:5050/home',
        changeOrigin: true,
        prependPath: true
      }
    },

    // storage: {
    //   db: {
    //     driver: 'fs',
    //     base: './data/db'
    //   }
    // },

    // 该配置用于服务端请求转发
    routeRules: {
      '/home/**': {
        proxy: 'http://127.0.0.1:5050/home/**',
      },
    },
  },
})
