import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { rem, hideVisually, rgba, darken } from "polished"
import MainMenu from "./main-menu"
import Container from "./container"
import styled from "styled-components"
import LogoIcon from "../images/logo.inline.svg"

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
	@media only screen and ( max-width: ${ props => props.theme.medium }px ) {
		svg {
			max-width: ${ rem( 66 ) };
		}

		span {
			${ hideVisually() };
		}
	}

	${ props => ( props.scrolled &&
	 `
		@media only screen and ( max-width: ${ props.theme.small }px ) {
			display: none;
		}
	 `
 	) }
`

/**
 * Logo icon wrapper styles.
 */
 const LogoIconWrapper = styled.div`
 ${ props => ( props.scrolled &&
	 `
		svg {
			max-width: ${rem(50)};
		}
	 `
 ) }
`

/**
 * <SiteLogo /> component
 * @param {props} SiteTitle
 */
const SiteLogo = (props) => (
	<SiteLogoStyles scrolled={ props.scrolled }>
		<Link to="/">
			<LogoIconWrapper scrolled={ props.scrolled }>
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
	flex-shrink: 0;
	z-index: 99;
	${ props => ( props.scrolled &&
		`
		position: sticky;
		top: 0;
		background-color: ${ rgba( props.theme.black, .95 ) };

		@media only screen and ( max-width: ${ props.theme.small }px ) {
			padding-top: ${ rem(10) };
			padding-bottom: ${ rem(10) };
			background-color: ${ rgba( darken( '0.013', props.theme.black ), .97 ) };
		}
		`
	) }
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
	}
`

/**
 * <Header /> component
 */
export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			scrolled: false,
		}
	}

	// Change "scrolled" state when scrolling.
	handleWindowScroll = () => {
		let siteHeader = this.SiteHeader;
		if ( siteHeader !== null ) {
			if ( window.scrollY > ( siteHeader.offsetHeight ) ) {
				this.setState({
					scrolled: true
				});
			} else {
				this.setState({
					scrolled: false
				});
			}
		}
	}

	componentWillUnmount() {
		// Cleaning up scroll event handler.
		window.removeEventListener( 'scroll', this.handleWindowScroll );
	}

	componentDidMount() {
		// Creating scroll event handler.
		window.addEventListener( 'scroll', this.handleWindowScroll );
	}

	render() {
		return (
			<HeaderStyled scrolled={ this.state.scrolled } ref={ element => this.SiteHeader = element }>
				<HeaderContainerStyled mediumWidth>
					<SiteLogo scrolled={ this.state.scrolled } siteTitle={this.props.siteTitle} />
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
