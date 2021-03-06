/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import { ThemeProvider } from "styled-components"
import "./src/scss/global.scss"
const sassVariables = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!./src/scss/_variables.scss')

export const wrapPageElement = ({ element }) => (
	<ThemeProvider theme={sassVariables}>
		{element}
	</ThemeProvider>
)
