import styled from 'styled-components'

/**
 * Container sizes.
 */
const mediumWidth = `1200px`;
const defaultWidth = `720px`;

const Container = styled.div`
	${ props => ( props.fullWidth && ! props.mediumWidth ) ? "max-width: 100%" : `max-width: ${defaultWidth};` };
	${ props => props.mediumWidth && `max-width: ${mediumWidth};` };
	margin-right: auto;
	margin-left: auto;
	padding-right: 1em;
	padding-left: 1em;
`
export default Container
