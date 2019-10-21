import React from "react"
import Link from "./link.js"
import styled from "styled-components"
import { rem, em, rgba } from "polished"
import mediaquery from "../functions/media-queries.js"
import Icon from "../components/icon"

/**
 * Styles for "ul" main menu "wrapper" element.
 */
const MainMenuWrapper = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;

	/* Tablet styles */
	${ mediaquery('md-down') } {
		margin-left: ${ props => rem( 25, props.baseFontSize ) };
	}

	${ mediaquery('sm-down') } {
		margin-left: 0;
	}

	a {
		display: block;
		padding-right: ${ props => em( 15, props.theme.baseFontSize ) };
		padding-left: ${ props => em( 15, props.theme.baseFontSize ) };
		line-height: 1;
		text-decoration: none;
		transition: text-shadow ease .3s;

		${ mediaquery('sm-down') } {
			padding-right: ${ props => em( 12, props.theme.baseFontSize ) };
			padding-left: ${ props => em( 12, props.theme.baseFontSize ) };
		}

		&:hover {
			text-shadow: 0 0 12px ${ rgba('#fff', 0.6) };

			svg {
				filter: drop-shadow(0px 5px 5px rgba('#fff', 0.4));
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
const NavMenuItem = props => {
	if ( props.icon ) {
		return (
			<li>
				<Link aria-label={ props.children } aria-describedby="external" to={props.to}>
					{ props.icon }
				</Link>
			</li>
		)
	}
	return (
		<li>
			<Link to={props.to}>
				{ props.children }
			</Link>
		</li>
	)
}


/**
 * MainMenu Component
 */
const MainMenu = props => (
	<>
		<nav aria-label="Main Menu">
			<MainMenuWrapper style={props.style}>
				<NavMenuItem to="/blog">Blog</NavMenuItem>
				<NavMenuItem to="/about">About</NavMenuItem>
				<NavMenuItem to="/contact">Contact</NavMenuItem>
				<NavMenuItem to="https://github.com/explorador" icon={<Icon src="github" />}>GitHub</NavMenuItem>
				<NavMenuItem to="https://gitlab.com/explorador20" icon={<Icon src="gitlab" />}>Gitlab</NavMenuItem>
			</MainMenuWrapper>
		</nav>
		<div id="external" className="visuallyhidden" aria-hidden="true">opens an external site</div>
	</>
)

export default MainMenu
