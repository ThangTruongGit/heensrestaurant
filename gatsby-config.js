const path = require("path");
require("dotenv").config({
  path: ".env"
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: path.join(__dirname, `src`, `assets`, `images`, `events`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `banners`,
        path: path.join(__dirname, `src`, `assets`, `images`, `banners`)
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "menu",
        path: path.join(__dirname, `src`, `data`)
      }
    }
  ]
};
