// Pulling sass variables.
const sassVariables = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!../scss/_variables.scss')

/**
 * Map screens with its variable.
 * In case variables name changes, there are only 2 places I'll have to change it:
 * Here and in global.scss
 */
const screens = {
	'xs': sassVariables.extraSmall,
	'sm': sassVariables.small,
	'md': sassVariables.medium,
	'lg': sassVariables.large,
}

/**
 * Media Query function
 * Gets media query.
 * @param {string} size
 *
 * Usage:
 * mediaquery(sm-down) = returns only "max-width" value in media query
 * mediaquery(sm) = returns both "min-width" and "max-width" values in media query.
 *
 * Note: You can turn "responsive debug mode" on/off in global.scss. variable: $debugResponsive
 */
const mediaquery = screen => {
	// If parameter has the '-down' string
	if ( screen.includes( '-down' ) ) {
		const screenSize = screens[screen.replace('-down', '')];
		// Return only max-width.
		return `@media only screen and (max-width: ${screenSize}px)`;
	} else {
		// Get current index.
		const index = Object.keys(screens).indexOf(screen);
		// Get "min-width" value (Previous index element + 1).
		const minWidth = index > 0 ? `(min-width: ${screens[Object.keys(screens)[index - 1]]+ 1}px) and ` : '';
		// Return both min-width and max-width (Only if previous index element is not 0).
		return `@media only screen and ${minWidth}(max-width: ${screens[screen]}px)`;
	}
}

export default mediaquery;
