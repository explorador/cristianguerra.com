import React from "react"
import styled from "styled-components"
import { rem } from "polished"
import mediaquery from "../functions/media-queries.js";
import BlogPost from "./blog-post-box"
import Link from "./link"
import { StaticQuery, graphql } from "gatsby"
import Stars from "./stars"

const BlogPostListSection = styled.section`
	padding-bottom: ${ props => rem( 60 ) };

	${ mediaquery('sm-down') } {
		padding-bottom: ${ props => rem( 20 ) };
	}
`

const BlogPostListWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0 0 ${rem( 30 )};
	padding: 0;
`

const BlogPostList = props => (
	<StaticQuery
		query={graphql`
			query {
				allContentfulBlogPost(sort: {
					order: DESC,
					fields: createdAt
				}, limit: 6) {
					nodes {
						id
						slug {
							slug
						}
						title
						postImage {
							fluid(maxWidth: 410, maxHeight: 245) {
								...GatsbyContentfulFluid_noBase64
							}
							description
						}
					}
				}
			}
		`}
		render={data => {
			const blogList = data.allContentfulBlogPost.nodes;
			return (
				<BlogPostListSection>
					{ // Display only IF props.limit is set.
					props.limit && <Stars position="left" transparency=".4" /> }
					{ props.title && <header><h1 className="h3 text-center">{ props.title }</h1></header> }
					<BlogPostListWrapper>
						{ blogList.slice(0, props.limit ? props.limit : 6 ).map( post =>{
							return (
								<BlogPost key={ post.id } title={ post.title } link={ `/blog/${post.slug.slug}` } img={ post.postImage } />
							)
						}
						) }
					</BlogPostListWrapper>

					{ // Display only IF props.limit is set.
					props.limit && <p className="text-center"><Link to="/blog" btnStyle="primaryColor">Go to Blog +</Link></p> }
				</BlogPostListSection>
			)
		}}
	/>
)

export default BlogPostList
