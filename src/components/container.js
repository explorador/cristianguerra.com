import styled from 'styled-components'

/**
 * Container sizes.
 */
const mediumWidth = `1200px`;
const defaultWidth = `720px`;

const Container = styled.div`
	max-width: ${ props =>
		(props.fullWidth && `100%`)
		|| (props.mediumWidth && mediumWidth)
		|| defaultWidth
	};
	margin-right: auto;
	margin-left: auto;
	padding-right: 1em;
	padding-left: 1em;
`
export default Container
