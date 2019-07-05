import React from "react";
import styled from "styled-components"
import { rem } from "polished"
import mediaquery from "../functions/media-queries.js";

const PageHeaderWrapper = styled.header`
	padding-top: ${ props => rem( 70 ) };
	padding-bottom: ${ props => rem( 70 ) };

	${ mediaquery('sm-down') } {
		padding-top: ${ props => rem( 35 ) };
		padding-bottom: ${ props => rem( 35 ) };
	}

	h1,
	p {
		margin-bottom: 0;
	}

	p {
		color: ${ props => props.theme.grayL };
	}
`

const PageHeader = props => (
	<PageHeaderWrapper className="text-center">
		<h1>{props.title}</h1>
		{props.subtitle &&
			<p className="text-uppercase">{props.subtitle}</p>
		}
	</PageHeaderWrapper>
)

export default PageHeader;
