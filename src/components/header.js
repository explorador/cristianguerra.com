import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainMenu from "./mainmenu"
import Container from "./container"

const Header = ({ siteTitle }) => (
	<header
		style={{
			marginBottom: `1.45rem`,
		}}
	>
		<Container>
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

			<MainMenu />
		</Container>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
