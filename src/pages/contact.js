import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import ProjectList from "../components/projects-list"
import Stars from "../components/stars"

export default () => (
	<Layout>
		<SEO title="Contact" />
		<Container>
			<Stars opacity=".8" />
			<PageHeader
				title="Contact"
				subtitle="Where To Find Me"
			/>
			<p className="text-center">I’m not available for freelance projects at the moment. <br/>You can follow me on Github.</p>
		</Container>
		<ProjectList />
	</Layout>
)
