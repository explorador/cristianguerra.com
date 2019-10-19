/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Container from "./container"
import styled from "styled-components"
import { rem } from "polished"
import Header from "./header"
import Mountains from "../images/mountains.inline.svg"
import Icon from "../components/icon"
import Link from "../components/link"

/**
 * Styles for site wrapper div.
 */
const SiteWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

/**
 * Styles for main site element.
 */
const MainStyled = styled.main`
	flex: 1 0 auto;
`

/**
 * Footer styles.
 */
const Footer = styled.footer`
	padding: ${ rem(30) } 0 0;

	p {
		margin-bottom: 0;
	}
`

const FooterDisclaimer = styled.div`
	max-width: ${ rem( 450 ) };
	margin: ${ rem( 20 ) } auto ${ rem( 15 ) };
	padding: ${ rem( 20 ) } ${ rem( 30 ) };
	background-color: ${ props => props.theme.grayD };

	a {
		text-decoration: none;
	}

	svg {
		position: relative;
		top: ${ rem( -1 ) };
		margin-right: ${ rem( 5 ) };
		max-width: ${ rem( 12 ) };
		vertical-align: middle;
		fill: white;
	}
`

/**
 * Layout Component
 */
const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title,
						author_url
					}
				}
			}
		`}
		render={data => (
			<SiteWrapper>
				<Header siteTitle={data.site.siteMetadata.title} />
				<MainStyled>{children}</MainStyled>
				<Footer>
					<Container className="text-center">
						<p className="text-small">&copy; {new Date().getFullYear()} {data.site.siteMetadata.author_url}</p>

						<FooterDisclaimer className="text-small">
							<p>This site is built with <Link to="https://www.gatsbyjs.org/"><Icon src="gatsby" />Gatsby</Link>, hosted with <Link to="https://www.netlify.com/"><Icon src="netlify" />Netlify</Link> and code hosted on <Link to="https://github.com/explorador/cristianguerra.com"><Icon src="github" />Github</Link> and <Link to="https://gitlab.com/explorador20/cristianguerra-com"><Icon src="gitlab" />Gitlab</Link>.</p>
						</FooterDisclaimer>
					</Container>
					<Mountains />
				</Footer>
			</SiteWrapper>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
