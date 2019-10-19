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
		<SEO title="Copy Text Plugin For Sketch" />
		<Container>
			<ProjectPageHeader title="Copy Text Plugin for Sketch" logo="sketch-logo" />

			<p className="text-center">Just a boring sketch plugin to copy text from selected artboard(s) or layer(s).</p>

			<ProjectDownloadLinks
				github="https://github.com/explorador/sketch-copy-text-only"
				gitlab="https://gitlab.com/explorador20/sketch-copy-text-only"
			/>

			<Space height="50" />

			<h3>Version 2:</h3>
			<ul>
				<li>Symbols support <span role="img" aria-label="Clapping hands">👏</span></li>
				<li>Action messages: Now you'll know if your text was copied or something went wrong</li>
				<li>Cleaner code -> Easier to maintain <span role="img" aria-label="Grinning face with open mouth">😃</span>: Plugin was rewritten from zero</li>
			</ul>
		</Container>
	</Layout>
)
