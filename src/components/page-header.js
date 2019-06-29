import React from "react";
import styled from "styled-components"
import { rem } from "polished"

const PageHeaderWrapper = styled.div`
	padding-top: ${ props => rem( 70 ) };
	padding-bottom: ${ props => rem( 70 ) };

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
