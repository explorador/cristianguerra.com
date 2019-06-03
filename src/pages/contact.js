import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import PageHeader from "../components/page-header"

export default () => (
	<Layout>
		<SEO title="Contact" />
		<Container>
			<PageHeader
				title="Contact"
				subtitle="Where To Find Me"
			/>
			<p>Contact Page</p>
		</Container>
	</Layout>
)
