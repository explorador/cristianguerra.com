import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import HomeHero from "../components/home-hero"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container mediumWidth>

			<HomeHero />

		</Container>
	</Layout>
)

export default IndexPage
