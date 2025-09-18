// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/https://github.com/Dmytrosat/delivery-food-vue/'   // ⚠️ ВАЖЛИВО! Замініть на ім'я вашого репозиторію! (https://github.com/Dmytrosat/delivery-food-vue)
    : '/'
}