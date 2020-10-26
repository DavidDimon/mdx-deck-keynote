module.exports = {
  pathPrefix: `/boilerplate-keynote`,
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        basePath: '/src',
      },
    },
  ],
}