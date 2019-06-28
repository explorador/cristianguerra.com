import React from "react"
import styled from "styled-components"
import { rem } from "polished"
import BlogPost from "./blog-post-box"
import Link from "./link"
import { StaticQuery, graphql } from "gatsby"

const BlogPostListSection = styled.section`
	padding-bottom: ${ props => rem( 60 ) };
`

const BlogPostListWrapper = styled.ul`
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
				allContentfulBlogPost(limit: 6) {
					nodes {
						id
						slug {
							slug
						}
						title
						postImage {
							fixed(width: 410, height: 245) {
								...GatsbyContentfulFixed_noBase64
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
					{ props.title && <h1 className="h3 text-center">{ props.title }</h1> }
					<BlogPostListWrapper>
						{ blogList.slice(0, props.limit ? props.limit : 6 ).map( post =>{
							return (
								<BlogPost key={ post.id } title={ post.title } link={ `/blog/${post.slug.slug}` } img={ post.postImage } />
							)
						}
						) }
					</BlogPostListWrapper>
					<p className="text-center">
						{ props.limit && <Link to="/blog" btnStyle="primary">Go to Blog +</Link> }
					</p>
				</BlogPostListSection>
			)
		}}
	/>
)

export default BlogPostList
