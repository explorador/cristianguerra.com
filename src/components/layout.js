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
	padding: ${ rem(30) } 0;

	p {
		margin-bottom: 0;
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
					</Container>
				</Footer>
			</SiteWrapper>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
