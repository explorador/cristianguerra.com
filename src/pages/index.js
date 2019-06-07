import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import HomeHero from "../components/home-hero"
import ProjectList from "../components/projects-list"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container mediumWidth>
			<HomeHero />
		</Container>
		<ProjectList />
	</Layout>
)

export default IndexPage
