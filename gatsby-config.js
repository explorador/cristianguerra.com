module.exports = {
	siteMetadata: {
		title: `Cristian Guerra`,
		description: `Cristian Guerra - Web Developer`,
		author: `Cristian Guerra`,
		author_url: `cristianguerra.com`,
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
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				implementation: require("sass"),
				includePaths: [
					require("node-normalize-scss").includePaths,
					path.resolve(__dirname, "./node_modules/sass-math-pow/sass"),
				],
				precision: 8,
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/
				}
			}
		}
	],
}
