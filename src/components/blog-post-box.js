import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rem, rgba } from "polished"

const BlogPostWrapper = styled.div`
	margin: ${ rem( 40 ) } ${ rem( 60 ) };
	max-width: ${ rem( 440 ) };
	border: solid 1px ${ props => rgba( props.theme.gray, 0.5 ) };
	border-radius: 5px;
	transition: border-color ease .2s;

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

const BlogPostTitle = styled.h2`
	padding: ${ rem( 33 ) } ${ rem( 35 ) };
	margin: auto 0 0;
	font-weight: 400;
`

const BlogPostImage = styled.div`
	align-self: flex-end;
	width: 100%;
	margin: 0 ${ rem(15) } ${ rem(15) };
	padding-bottom: 56.01965602%;
	filter: grayscale(100%);
	border-radius: 5px;
	background-color: ${ props => props.theme.black };
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	background-clip: padding-box;
`

const BlogPost = props => (
	<BlogPostWrapper>
		<Link to={props.link}>
			<BlogPostTitle className="h6 text-capitalize">{props.title}</BlogPostTitle>
			<BlogPostImage style={{ backgroundImage: `url( ${props.img} )` }} />
		</Link>
	</BlogPostWrapper>
)

export default BlogPost
