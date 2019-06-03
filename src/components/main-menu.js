import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rem, em, hideVisually } from "polished"
import GithubIcon from "../images/github.inline.svg"

/**
 * Styles for "ul" main menu "wrapper" element.
 */
const MainMenuWrapper = styled.ul`
	display: flex;
	margin: 0 0 0 auto;
	padding: 0;
	list-style: none;

	/* Tablet and Mobile styles */
	@media only screen and ( max-width: 1024px ) {
		margin-left: ${ props => rem( 25, props.baseFontSize ) };
	}

	a {
		display: block;
		padding-right: ${ props => em( 15, props.theme.baseFontSize ) };
		padding-left: ${ props => em( 15, props.theme.baseFontSize ) };
		line-height: 1;
		text-decoration: none;
	}

	svg {
		position: relative;
		top: ${ props => em( -2, props.theme.baseFontSize ) };
		display: inline-block;
		vertical-align: middle;
		width: 1em;
		max-width: none;
		height: 1em;
		fill: #fff;

		& + span {
			${hideVisually()}
		}
	}

	li:first-child {
		a {
			padding-left: 0;
		}
	}

	li:last-child {
		a {
			padding-right: 0;
		}
	}
`

/**
 * NavMenuItem Component
 */
const NavMenuItem = props => (
	<li>
		<Link to={props.to}>
			{props.icon &&
				props.icon
			}
			<span>{ props.children }</span>
		</Link>
	</li>
)

/**
 * MainMenu Component
 */
const MainMenu = props => (
	<MainMenuWrapper style={props.style}>
		<NavMenuItem to="/blog">Blog</NavMenuItem>
		<NavMenuItem to="/about">About Me</NavMenuItem>
		<NavMenuItem to="/contact">Contact</NavMenuItem>
		<NavMenuItem to="/" icon={<GithubIcon />}>GitHub</NavMenuItem>
	</MainMenuWrapper>
)

export default MainMenu
