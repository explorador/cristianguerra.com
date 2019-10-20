import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { em, rem, darken } from "polished"
import styled from "styled-components"

/**
 * Custom Link component.
 */
const PlainLink = ({ children, to, activeClassName, partiallyActive, btnStyle, ...other }) => {
	// Check if link starts with one slash.
	const internal = /^\/(?!\/)/.test(to)

	if ( internal ) {
		return (
			<GatsbyLink
				to={to}
				activeClassName={activeClassName}
				partiallyActive={partiallyActive}
				{...other}
			>
				{children}
			</GatsbyLink>
		)
	}
	return (
		<a target="_blank" rel="noopener noreferrer" href={to} {...other}>
			{children}
		</a>
	)
}

/**
 * <Link /> component styles.
 * ex: <Link btnStyle="primary">Text</link>
 */
const Link = styled(PlainLink)`
	${ props => typeof props.btnStyle !== 'undefined' &&`
		display: inline-block;
		margin-bottom: ${ em( 10 ) };
		padding: ${ em( 12, props.theme.baseFontSize )} ${em( 25, props.theme.baseFontSize ) };
		background-color: ${ props.theme[`${props.btnStyle}`] };
		font-weight: 700;
		text-decoration: none;
		text-transform: uppercase;
		line-height: 1.1;
		border-radius: 5px;
		transition: box-shadow ease .2s;
		${ props.btnStyle === 'white' && `color: ${ props.theme[`black`] }` };
		${ props.btnStyle === 'white' ? `svg { fill: ${ props.theme[`black`] } }` : 'svg { fill: white }' };

		&:hover {
			box-shadow: ${ props.theme[`${props.btnStyle}`] && `0 0 14px 0 ${darken( '0.2', props.theme[`${props.btnStyle}`] )}` };
		}

		&:last-child {
			margin-bottom: 0;
		}

		svg {
			position: relative;
			top: ${ rem( -1 ) };
			margin-right: ${ em( 5 ) };
			vertical-align: top;
		}
	`}
`

export default Link
