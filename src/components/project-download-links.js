import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Link from '../components/link'
import Icon from '../components/icon'

/**
 * Styles for <ProjectDownloadLinks />.
 */
const ProjectDownloadLinksStyles = styled.div`
	text-align: center;

	a {
		margin-right: ${ rem( 5 ) };
		margin-left: ${ rem( 5 ) };
	}

	svg {
		max-width: ${ rem( 28 ) };
	}
`;

/**
 * <ProjectDownloadLinks /> component.
 * @param url github
 * @param url gitlab
 */
const ProjectDownloadLinks = ({ github, gitlab, npm }) => (
	<ProjectDownloadLinksStyles>
		{ github && <Link to={ github } btnStyle="white"><Icon src="github" />Download</Link> }
		{ gitlab && <Link to={ gitlab } btnStyle="gitlabOrange"><Icon src="gitlab" />Download</Link> }
		{ npm && <Link to={ npm } btnStyle="primaryColor"><Icon src="npm" />Download</Link> }
	</ProjectDownloadLinksStyles>
)

export default ProjectDownloadLinks;
