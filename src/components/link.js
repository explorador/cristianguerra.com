import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { em, darken } from "polished"
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
		<a href={to} {...other}>
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
		padding: ${em( 14, props.theme.baseFontSize )} ${em( 25, props.theme.baseFontSize )};
		background-color: ${ props.theme[`${props.btnStyle}Color`] };
		font-weight: 700;
		text-decoration: none;
		text-transform: uppercase;
		line-height: 1.1;
		border-radius: 5px;
		box-shadow: 0 0 14px 0 ${ darken( '0.2', props.theme[`${props.btnStyle}Color`] ) };
		transition: background-color ease .2s;

		&:hover {
			background-color: ${ darken( '0.15', props.theme[`${props.btnStyle}Color`] ) };
			box-shadow: 0 0 14px 0 ${ darken( '0.3', props.theme[`${props.btnStyle}Color`] ) };
		}
	`}
`

export default Link
