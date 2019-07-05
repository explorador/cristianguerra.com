import styled from 'styled-components'
import { rem, em } from 'polished'
import mediaquery from "../functions/media-queries.js";

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

	${ mediaquery('sm-down') } {
		padding-right: ${ props => em( 15, props.theme.baseFontSize ) };
		padding-left: ${ props => em( 15, props.theme.baseFontSize ) };
	}
`
export default Container
