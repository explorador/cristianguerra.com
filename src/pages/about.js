import React from "react"
import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"
import { rem, em } from "polished"
import Container from "../components/container"
import PageHeader from "../components/page-header"
import AboutAnimation from "../components/about-animation"
import ProjectList from "../components/projects-list"
import Space from "../components/space"
import Icon from "../components/icon"
import Stars from "../components/stars"

/**
 * Styles for SkillsList component.
 */
const SkillsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0;
	padding: 0;
	list-style: none;

	li {
		flex-grow: 1;
		flex-shrink: 0;
		padding: ${ rem(30) };
		text-align: center;
		color: ${ props => props.theme.grayL };
	}

	svg {
		display: block;
		height: ${ rem(60) };
		margin: 0 auto ${ rem(10) };
		fill: ${ props => props.theme.grayL };
	}
`

/**
 * Styles for SkillTitle component.
 */
const SkillTitle = styled.h3`
	margin-bottom: 0;
	font-size: ${ em(14) };
`

/**
 * Skill component.
 * @param string name.
 */
const Skill = ({ name }) => (
	<>
		<Icon src={name} />
		<SkillTitle>{name}</SkillTitle>
	</>
)

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
							wordCount {
								words
							}
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

						{page.content.childMarkdownRemark.wordCount.words > 0 && <div dangerouslySetInnerHTML={{ __html: page.content.childMarkdownRemark.html }} />}

						<Space height="40" />
						<h2 className="h5 text-center">Technical Skills and Knowledge</h2>
						<Stars position="left" transparency=".3" />

						<SkillsList>
							<li><Skill name="css3" /></li>
							<li><Skill name="html5" /></li>
							<li><Skill name="js" /></li>
							<li><Skill name="git" /></li>
							<li><Skill name="linux" /></li>
							<li><Skill name="node" /></li>
							<li><Skill name="react" /></li>
							<li><Skill name="graphql" /></li>
							<li><Skill name="webpack" /></li>
							<li><Skill name="docker" /></li>
							<li><Skill name="gatsby" /></li>
							<li><Skill name="sass" /></li>
							<li><Skill name="gulp" /></li>
							<li><Skill name="grunt" /></li>
							<li><Skill name="sketch" /></li>
							<li><Skill name="mysql" /></li>
							<li><Skill name="php" /></li>
							<li><Skill name="wordpress" /></li>
						</SkillsList>
					</Container>

					<ProjectList />
				</Layout>
			)
		}}
	/>
)
