import React from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import AboutAnimation from "../components/about-animation"

export default () => (
	<StaticQuery
		query={graphql`
			query {
				contentfulPage(contentful_id: {eq: "2E8puKoDdPYhuYWo6ejbOr"}) {
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
						<PageHeader
							title={page.title}
							subtitle={page.subtitle}
						/>
						<AboutAnimation />
						<div dangerouslySetInnerHTML={{ __html: page.content.childMarkdownRemark.html }} />
					</Container>
				</Layout>
			)
		}}
	/>
)
