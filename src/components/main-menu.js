import React from "react"
import Link from "./link.js"
import styled from "styled-components"
import { rem, em, rgba, hideVisually } from "polished"
import GithubIcon from "../images/github.inline.svg"

/**
 * Styles for "ul" main menu "wrapper" element.
 */
const MainMenuWrapper = styled.ul`
	display: flex;
	margin: 0 0 0 auto;
	padding: 0;
	list-style: none;

	/* Tablet styles */
	@media only screen and ( max-width: ${ props => props.theme.medium }px ) {
		margin-left: ${ props => rem( 25, props.baseFontSize ) };
	}

	@media only screen and ( max-width: ${ props => props.theme.small }px ) {
		margin-left: 0;
	}

	a {
		display: block;
		padding-right: ${ props => em( 15, props.theme.baseFontSize ) };
		padding-left: ${ props => em( 15, props.theme.baseFontSize ) };
		line-height: 1;
		text-decoration: none;
		transition: text-shadow ease .3s;

		@media only screen and ( max-width: ${ props => props.theme.small }px ) {
			padding-right: ${ props => em( 12, props.theme.baseFontSize ) };
			padding-left: ${ props => em( 12, props.theme.baseFontSize ) };
		}

		&:hover {
			text-shadow: 0 0 12px ${ rgba(`#fff`, .6) };

			svg {
				filter: drop-shadow(0px 5px 5px rgba(255,255,255,0.4));
			}
		}
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
		<NavMenuItem to="https://github.com/explorador" icon={<GithubIcon />}>GitHub</NavMenuItem>
	</MainMenuWrapper>
)

export default MainMenu
