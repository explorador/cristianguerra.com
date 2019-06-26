/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return graphql(`
		{
			allContentfulBlogPost {
				edges {
					node {
						id
						slug {
							slug
						}
					}
				}
			}
		}
	`).then(result => {
		result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
			createPage({
				path: `/blog/${node.slug.slug}`,
				component: require.resolve(`./src/templates/blog-post.js`),
				context: {
					slug: node.slug.slug,
				},
			});
		});
	});
}
