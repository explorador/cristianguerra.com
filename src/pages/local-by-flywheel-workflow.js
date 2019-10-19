import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'
import Space from '../components/space'
import ProjectPageHeader from '../components/project-page-header'
import ProjectDownloadLinks from '../components/project-download-links'

/**
 * Page content.
 */
export default () => (
	<Layout>
		<SEO title="Local By Flywheel Alfred Workflow" />
		<Container>
			<ProjectPageHeader title="Local By Flywheel Alfred Workflow" logo="rocket-icon" />

			<p className="text-center">An alfred workflow to handle your web projects.</p>

			<ProjectDownloadLinks
				npm="https://www.npmjs.com/package/alfred-local-by-flywheel"
			/>

			<div className="gatsby-highlight" data-language="bash">
				<pre className="language-bash"><code className="language-bash">$ npm install --global alfred-local-by-flywheel</code></pre>
			</div>

			<Space height="50" />

			<h3>Usage:</h3>

			<p>In Alfred, type local, Enter, and your query.</p>

			<h3>Options:</h3>
			<ol>
				<li>Option (⌥): Opens site SSH</li>
				<li>Command (⌘): Opens site root directory</li>
			</ol>
		</Container>
	</Layout>
)
