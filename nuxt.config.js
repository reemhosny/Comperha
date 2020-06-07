
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Compareha',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap' },
    ],
    script: [
      /* Font Awesome */
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js',  crossorigin:'anonymous'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
 css: [
  '@/assets/css/bootstrap-grid.min.css',
  '@/assets/sass/main.scss'
],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',

     // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',

    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

    'nuxt-sass-resources-loader',

  ],

 

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
