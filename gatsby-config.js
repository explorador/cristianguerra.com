let contentfulConfig

try {
	// Load the Contentful config from the .contentful.json
	contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
	accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
	host: `preview.contentful.com`,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
	throw new Error(
		'Contentful spaceId and the delivery token need to be provided.'
	)
}

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
				name: `cristian-guerra-personal-site`,
				short_name: `cristian-guerra`,
				start_url: `/`,
				background_color: `#f55f44`,
				theme_color: `#f55f44`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				implementation: require("sass"),
				includePaths: [
					require("node-normalize-scss").includePaths,
					require('path').dirname(require.resolve("sass-math-pow/sass/_math-pow.scss"))
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
		},
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-polished`,
		},
		{
			resolve: `gatsby-source-contentful`,
			options: contentfulConfig,
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: false,
							noInlineHighlight: false,
							languageExtensions: [
								{
									language: "superscript",
									extend: "javascript",
									definition: {
										superscript_types: /(SuperType)/,
									},
									insertBefore: {
										function: {
											superscript_keywords: /(superif|superelse)/,
										}
									},
								}
							],
						},
					},
				],
			},
		},
	],
}
