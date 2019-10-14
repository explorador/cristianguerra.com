import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { rem } from "polished"
import mediaquery from "../functions/media-queries.js";
import Stars from "../components/stars"

/**
 * <BlogPostHeader /> styles.
 */
const BlogPostHeader = styled.div`
	padding-top: ${ props => rem( 70 ) };
	padding-bottom: ${ props => rem( 60 ) };

	${ mediaquery('sm-down') } {
		padding-top: ${ props => rem( 35 ) };
		padding-bottom: ${ props => rem( 30 ) };
	}

	h1 {
		margin-bottom: 0;
		text-transform: none;
	}
`

/**
 * <BlogPostImage /> styles.
 */
const BlogPostImage = styled(Img)`
	margin-bottom: ${ rem( 60 ) };
	filter: grayscale(100%);

	${ mediaquery('sm-down') } {
		margin-bottom: ${ rem( 30 ) };
	}
`

export default ({ data }) => {
	const post = data.contentfulBlogPost;
	return (
		<Layout>
			<SEO title={post.title} />
			<Container>
				<Stars position="center" opacity="0.5" />
				<BlogPostHeader><h1 className="h3 text-center">{post.title}</h1></BlogPostHeader>
				{post.postImage && <BlogPostImage alt={post.postImage.description} fluid={post.postImage.fluid} />}
				{post.content.childMarkdownRemark.html && <div dangerouslySetInnerHTML={{ __html: post.content.childMarkdownRemark.html }} />}
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
