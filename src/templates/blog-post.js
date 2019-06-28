import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { rem } from "polished"
import Stars from "../components/stars"

const BlogPostImage = styled(Img)`
	margin-bottom: ${ rem( 60 ) };
	filter: grayscale(100%);
`

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
				<BlogPostImage alt={post.postImage.description} fluid={post.postImage.fluid} />
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
				fluid(maxWidth: 720) {
					...GatsbyContentfulFluid_noBase64
				}
				description
			}
		}
	}
`
