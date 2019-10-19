import React from 'react'
import styled, { keyframes } from 'styled-components'
import { rem } from 'polished'
import Icon from '../components/icon'
import Stars from '../components/stars'

/**
 * Project Logo animation.
 */
const LogoAnimation = keyframes`
	0 {
		filter: drop-shadow(0px 0 5px rgba(255,255,255,0.7));
	}
	50% {
		filter: drop-shadow(0px 0 25px rgba(255,255,255,0.7));
	}
	100% {
		filter: drop-shadow(0px 0 5px rgba(255,255,255,0.7));
	}
`;

/**
 * <ProjectPageLogo /> component.
 */
const ProjectPageLogo = styled(Icon)`
	width: ${ rem( 200 ) };
	max-width: 100%;
	margin: ${ rem( 40 ) } auto;
	fill: white;
	filter: drop-shadow(0px 0 5px rgba(255,255,255,0.7));
	animation: ${ LogoAnimation } 4s ease infinite;
`;

/**
 * <ProjectPageHeader /> component.
 * @param string title
 * @param string logo
 */
const ProjectPageHeader = ({ title, logo }) => (
	<>
		<ProjectPageLogo src={ logo } />
		<h1 className="text-center">{ title }</h1>
		<Stars top="0" transparency=".3" />
	</>
);

export default ProjectPageHeader;
