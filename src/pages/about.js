import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import AboutImage from "../images/about.inline.svg"

export default () => (
	<Layout>
		<SEO title="About Me" />
		<Container>
			<PageHeader>About Me</PageHeader>
			<AboutImage />

		</Container>
	</Layout>
)
