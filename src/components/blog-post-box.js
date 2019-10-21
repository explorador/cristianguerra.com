import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rem, rgba } from "polished"
import mediaquery from "../functions/media-queries.js";
import Img from "gatsby-image"

const BlogPostWrapper = styled.article`
	margin: ${ rem( 40 ) } ${ rem( 60 ) };
	width: 100%;
	max-width: ${ rem( 440 ) };
	border: solid 1px ${ props => rgba( props.theme.gray, 0.5 ) };
	border-radius: 5px;
	transition: border-color ease .2s;

	${ mediaquery('lg') } {
		margin: ${ rem( 20 ) } ${ rem( 20 ) };
	}

	${ mediaquery('md-down') } {
		margin: ${ rem( 15 ) } ${ rem( 15 ) };
	}

	&:hover {
		border-color: ${ props => props.theme.white };
	}

	> a {
		display: flex;
		flex-wrap: wrap;
		height: 100%;
		text-decoration: none;
	}
`

const BlogPostBoxHeader = styled.header`
	padding: ${ rem( 33 ) } ${ rem( 35 ) };
	margin: auto 0 0;
	font-weight: 400;

	> :last-child {
		margin-bottom: 0;
	}
`

const BlogPostImage = styled(Img)`
	align-self: flex-end;
	width: 100%;
	margin: 0 ${ rem(15) } ${ rem(15) };
	filter: grayscale(100%);
	border-radius: 5px;
`

const BlogPost = props => {
	return (
		<BlogPostWrapper>
			<Link to={props.link}>
				<BlogPostBoxHeader><h2 className="h6 text-capitalize">{props.title}</h2></BlogPostBoxHeader>
				{props.img && <BlogPostImage alt={props.img.description} fluid={props.img.fluid} />}
			</Link>
		</BlogPostWrapper>
	)
}

export default BlogPost
