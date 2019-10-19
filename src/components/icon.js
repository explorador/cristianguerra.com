import React from "react"

/**
 * Icon component.
 * @param string src First name of the  *.inline.svg file.
 * @ref https://www.gatsbyjs.org/packages/gatsby-plugin-react-svg/
 */
const Icon = ({ src, ...other }) => {
	try {
		// Include svg image based on src prop.
		const SvgIcon = require(`../images/${src}.inline.svg`)
		// Render new Component.
		return <SvgIcon className="svg-icon" {...other} />
	} catch (err) {
		return <>Icon Not Found</>
	}
}

export default Icon
