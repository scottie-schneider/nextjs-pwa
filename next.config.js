const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
// For env variables in NextJS
// step 1: require the dotenv library  
require("dotenv").config();

module.exports = {  
  // step 2: declare the env variables in module exports
  env: {
    GOOGLE_MAPS: process.env.GOOGLE_MAPS,
    MONGO_URI: process.env.MONGO_URI,
    SESSION_SECRET: process.env.SESSION_SECRET
  },
  webpack: (config) => {    
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    return config
  }
}
