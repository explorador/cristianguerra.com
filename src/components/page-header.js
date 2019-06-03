import React from "react";
import styled from "styled-components"
import { rem } from "polished"

const PageHeaderWrapper = styled.div`
	padding-top: ${ props => rem( 100, props.theme.baseFontSize ) };
`

const PageHeader = ({ children }) => (
	<PageHeaderWrapper>
		<h1 className="text-center">{children}</h1>
	</PageHeaderWrapper>
)

export default PageHeader;
