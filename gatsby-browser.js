/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { ThemeProvider } from "styled-components"
import "./src/scss/global.scss"
const sassVariables = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!./src/scss/_variables.scss')
// Load Inconsolata typeface
require('typeface-inconsolata')

export const wrapPageElement = ({ element }) => (
	<ThemeProvider theme={sassVariables}>
		{element}
	</ThemeProvider>
)
