import styled from 'styled-components'
import { rem, em } from 'polished'

/**
 * Container sizes.
 */
const mediumWidth = rem( 1200 );
const defaultWidth = rem( 720 );

const Container = styled.div`
	max-width: ${ props =>
		(props.fullWidth && `100%`)
		|| (props.mediumWidth && mediumWidth)
		|| defaultWidth
	};
	margin-right: auto;
	margin-left: auto;
	padding-right: ${ props => em( 25, props.theme.baseFontSize ) };
	padding-left: ${ props => em( 25, props.theme.baseFontSize ) };

	@media only screen and ( max-width: ${ props => props.theme.small }px ) {
		padding-right: ${ props => em( 15, props.theme.baseFontSize ) };
		padding-left: ${ props => em( 15, props.theme.baseFontSize ) };
	}
`
export default Container
