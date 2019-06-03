import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { rem } from "polished"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import ProjectsList from "../components/projects-list"
import NotFoundImage from "../images/notfound.inline.svg"

const NotFoundImageStyled = styled(NotFoundImage)`
	display: block;
	max-width: 100%;
	height: auto;
	margin: 0 auto ${ props => rem( 120, props.theme.baseFontSize ) };
`

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<Container>
			<PageHeader
				title="404"
				subtitle="Houston!"
			/>
			<p className="text-center">The page you are looking for doesn’t exists</p>
			<NotFoundImageStyled />
		</Container>

		<ProjectsList />
	</Layout>
)

export default NotFoundPage
