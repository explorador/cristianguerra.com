import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import HomeHero from "../components/home-hero"
import ProjectList from "../components/projects-list"
import BlogPostList from "../components/blog-post-list"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container mediumWidth>
			<HomeHero />
		</Container>
		<ProjectList />
		<BlogPostList title="Latest From My Blog" limit={ 3 } />
	</Layout>
)

export default IndexPage
