import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainMenu from "./mainmenu"
import Container from "./container"
import styled from "styled-components"

const HeaderContainerStyled = styled(Container)`
	display: flex;
	padding-top: 1em;
	padding-bottom: 1em;
`

const Header = ({ siteTitle }) => (
	<header
		style={{
			flexShrink: `0`
		}}
	>
		<HeaderContainerStyled mediumWidth>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						textDecoration: `none`,
					}}
				>
					{siteTitle}
				</Link>
			</h1>

			<MainMenu
				style={{
					marginLeft: `auto`
				}}
			/>
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
