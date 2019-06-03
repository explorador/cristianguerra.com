import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { rem, hideVisually } from "polished"
import MainMenu from "./main-menu"
import Container from "./container"
import styled from "styled-components"
import LogoIcon from "../images/logo.inline.svg"

/**
 * Header container styles (<Container /> component inside <header />)
 */
const HeaderContainerStyled = styled(Container)`
	display: flex;
	align-items: center;
	padding-top: 1em;
	padding-bottom: 1em;

	/* Tablet and Mobile styles */
	@media only screen and ( max-width: 1024px ) {
		justify-content: center;
	}

	/* Mobile styles */
	@media only screen and ( max-width: 767px ) {
		flex-direction: column;
	}
`

/**
 * Logo styles.
 */
const SiteLogoStyles = styled.h1`
	margin: 0;
	font-size: 1em;

	/* Mobile styles */
	@media only screen and ( max-width: 767px ) {
		margin-bottom: ${ rem( 12 ) };
	}

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	span {
		margin-bottom: 0;
		padding-left: ${ rem( 12 ) };
	}

	/* Tablet and Mobile styles */
	@media only screen and ( max-width: 1024px ) {
		svg {
			max-width: ${ rem( 66 ) };
		}

		span {
			${ hideVisually() };
		}
	}
`

/**
 * <SiteLogo /> component
 * @param {props} SiteTitle
 */
const SiteLogo = ({ siteTitle }) => (
	<SiteLogoStyles>
		<Link to="/">
			<div>
				<LogoIcon />
			</div>
			<span className="h6">{siteTitle}</span>
		</Link>
	</SiteLogoStyles>
)

/**
 * <Header /> component
 */
const Header = ({ siteTitle }) => (
	<header
		style={{
			flexShrink: `0`
		}}
	>
		<HeaderContainerStyled mediumWidth>
			<SiteLogo siteTitle={siteTitle} />
			<MainMenu />
		</HeaderContainerStyled>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
