import React from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import ProjectList from "../components/projects-list"
import Stars from "../components/stars"

export default () => (
	<StaticQuery
		query={graphql`
			query {
				contentfulPage(contentful_id: {eq: "VzE6RRuGIyrqPOmpK9ifw"}) {
					title
					subtitle
					content {
						childMarkdownRemark {
							html
						}
					}
				}
			}
		`}
		render={data => {
			const page = data.contentfulPage;
			return (
				<Layout>
					<SEO title={page.title} />
					<Container>
						<Stars opacity=".8" />
						<PageHeader
							title={page.title}
							subtitle={page.subtitle}
						/>
						<div dangerouslySetInnerHTML={{ __html: page.content.childMarkdownRemark.html }} />
					</Container>
					<ProjectList />
				</Layout>
			)
		}}
	/>
)
