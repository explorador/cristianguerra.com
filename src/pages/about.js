import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import AboutAnimation from "../components/about-animation"

export default () => (
	<Layout>
		<SEO title="About Me" />
		<Container>
			<PageHeader
				title="About Me"
			/>
			<AboutAnimation />
		</Container>
	</Layout>
)
