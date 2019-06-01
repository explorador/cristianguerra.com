import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import PageHeader from "../components/page-header"

export default () => (
	<Layout>
		<SEO title="Blog" />
		<Container>
			<PageHeader>Blog</PageHeader>
			<p>Blog list</p>
		</Container>
	</Layout>
)
