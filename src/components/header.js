import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { rem, hideVisually, rgba } from "polished"
import MainMenu from "./main-menu"
import Container from "./container"
import styled from "styled-components"
import LogoIcon from "../images/logo.inline.svg"

/**
 * Logo styles.
 */
const SiteLogoStyles = styled.div`
	margin: 0 auto 0 0;
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
	@media only screen and ( max-width: ${ props => props.theme.medium }px ) {
		span {
			${ hideVisually() };
		}
	}

	@media only screen and ( max-width: ${ props => props.theme.small }px ) {
		svg {
			max-width: ${ rem( 30 ) };
		}
	}
`

/**
 * Logo icon wrapper styles.
 */
 const LogoIconWrapper = styled.div`
	 max-width: ${rem(50)};
`

/**
 * <SiteLogo /> component
 * @param {props} SiteTitle
 */
const SiteLogo = (props) => (
	<SiteLogoStyles>
		<Link to="/">
			<LogoIconWrapper>
				<LogoIcon />
			</LogoIconWrapper>
			<span className="h6">{ props.siteTitle }</span>
		</Link>
	</SiteLogoStyles>
)


/**
 * Header element styles
 */
const HeaderStyled = styled.header`
	position: sticky;
	flex-shrink: 0;
	z-index: 99;
	top: 0;
	background-color: ${ props => rgba( props.theme.black, .95 ) };
`

/**
 * Header container styles (<Container /> component inside <header />)
 */
const HeaderContainerStyled = styled(Container)`
	display: flex;
	align-items: center;
	padding-top: 1em;
	padding-bottom: 1em;

	/* Tablet and Mobile styles */
	@media only screen and ( max-width: ${ props => props.theme.medium }px ) {
		justify-content: center;
	}

	/* Mobile styles */
	@media only screen and ( max-width: ${ props => props.theme.small }px ) {
		flex-direction: column;
		padding-top: .5em;
		padding-bottom: .8em;
	}
`

/**
 * <Header /> component
 */
export default class Header extends React.Component {
	render() {
		return (
			<HeaderStyled>
				<HeaderContainerStyled mediumWidth>
					<SiteLogo aria-hidden="true" siteTitle={this.props.siteTitle} />
					<MainMenu />
				</HeaderContainerStyled>
			</HeaderStyled>
		)
	}
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

// export default Header
