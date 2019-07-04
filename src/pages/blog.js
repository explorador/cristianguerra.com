import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import BlogPostList from "../components/blog-post-list"
import Stars from "../components/stars"

export default () => (
	<Layout>
		<SEO title="Blog" />
		<Container mediumWidth>
			<Stars position="center" transparency="0.5" />
			<PageHeader
				title="Blog"
				subtitle="Not a journal, Just code and stuff"
			/>
			<BlogPostList />
		</Container>
	</Layout>
)
