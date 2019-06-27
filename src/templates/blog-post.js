import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import { graphql } from "gatsby"
import Stars from "../components/stars"

export default ({ data }) => {
	const post = data.contentfulBlogPost;
	return (
		<Layout>
			<SEO title={post.title} />
			<Container>
				<Stars position="center" opacity="0.5" />
				<PageHeader
					title={post.title}
				/>
				<div dangerouslySetInnerHTML={{ __html: post.content.childMarkdownRemark.html }} />
			</Container>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: {slug: {eq: $slug}}) {
			content {
				childMarkdownRemark {
					html
				}
			}
			title
			postImage {
				file {
					url
				}
			}
		}
	}
`
