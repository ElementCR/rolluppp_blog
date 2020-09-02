module.exports = {
  siteMetadata: {
    title: `RollUPPP`,
    description: `Chattanooga's Home for Putting People on Platforms, Policies, and Procedures`,
    author: `@Element_CR`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        path:`${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-remark-embed-video",
      options: {
          width: 800,
          ratio: 1.77, 
          height: 400, 
          related: false,
          noIframeBorder: true
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
