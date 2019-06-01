import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

/**
 * Styles for "ul" main menu "wrapper" element.
 */
const MainMenuWrapper = styled.ul`
	display: flex;
	padding-left: 0;
	list-style: none;

	a {
		padding-right: 1em;
		padding-left: 1em;
		text-decoration: none;
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
			{props.children}
			{props.image &&
				<img src="props.image" alt=""/>
			}
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
	</MainMenuWrapper>
)

export default MainMenu
