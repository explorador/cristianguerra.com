import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import ProjectList from "../components/projects-list"
import ContactImage from "../images/contact.inline.svg"

export default () => (
	<Layout>
		<SEO title="Contact" />
		<Container>
			<PageHeader
				title="Contact"
				subtitle="Where To Find Me"
			/>
			<p className="text-center">Sorry, I’m not available for freelance projects at the moment but you can still follow me on Github.</p>
			<ContactImage className="img-center" />
		</Container>
		<ProjectList />
	</Layout>
)
