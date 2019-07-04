import React from "react"
import Link from "./link"
import styled from "styled-components"
import { rem, rgba } from "polished"
import Container from "./container"
import Stars from "./stars"
import SketchLogo from "../images/sketch-logo.inline.svg"
import FirefoxLogo from "../images/firefox-logo.inline.svg"
import RocketIcon from "../images/rocket-icon.inline.svg"

/**
 * Project List "section" wrapper styles.
 */
const ProjectListStyled = styled.section`
	position: relative;
	padding-top: ${ props => rem( 80 ) };
	padding-bottom: ${ props => rem( 80 ) };

	&:last-child {
		position: sticky;
		top: 100vh;
		padding-bottom: 0;
	}
`

/**
 * Project list title (h1) styles
 */
const ProjectListTitle = styled.h1`
	margin-bottom: ${ rem( 60 ) };
`

/**
 * Project list "ul" styles.
 */
const ProjectListWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-left: 0;
	list-style: none;
`

/**
 * Project list "li" items styles.
 */
const ProjectBoxStyled = styled.li`
	position: relative;
	margin: 0 ${rem( 45 )} ${rem( 45 )};
	width: ${ rem( 220 ) };
	text-align: center;
	border: solid 1px ${ props => rgba( props.theme.gray, 0.5 ) };
	border-radius: 5px;
	transition: border-color ease .2s;

	@media only screen and ( max-width: ${ props => props.theme.small }px ) {
		margin: 0 ${rem( 15 )} ${rem( 35 )};
	}

	svg {
		margin-right: auto;
		margin-left: auto;
		margin-bottom: ${ props => rem( 17 ) };
		fill: ${ props => props.theme.gray };
		transition: fill ease .2s;
	}

	a {
		display: block;
		height: 100%;
		padding: ${ rem( 35 ) } ${ rem( 15 ) };
		text-decoration: none;
	}

	&:hover {
		border-color: ${ props => props.theme.white };

		svg {
			fill: ${ props => props.theme.white };
			filter: drop-shadow(0px 5px 5px rgba(255, 255, 255, 0.4));
		}
	}
`

/**
 * Project title styles.
 */
const ProjectTitle = styled.h3`
	margin-bottom: ${ props => rem( 5 ) };
`

/**
 * Project subtitle styles.
 */
const ProjectSubtitle = styled.p`
	margin-bottom: 0;
	color: ${ props => props.theme.grayL };
	line-height: 1.2;
`

/**
 * <ProjectBox /> component.
 * @param {object} props Component props.
 */
const ProjectBox = props => (
	<ProjectBoxStyled>
		<Link to={props.link}>
			{props.icon}
			<ProjectTitle className="p text-capitalize">{props.title}</ProjectTitle>
			<ProjectSubtitle className="text-small">{props.subtitle}</ProjectSubtitle>
		</Link>
	</ProjectBoxStyled>
)

/**
 * <ProjectList /> component (Main component).
 */
const ProjectList = () => (
	<ProjectListStyled>
		<Stars position="right" top="0" transparency=".3" />
		<Container mediumWidth>
			<ProjectListTitle className="h3 text-center">Stuff From My Lab</ProjectListTitle>

			<ProjectListWrapper>
				<ProjectBox
					link="#"
					icon={<SketchLogo />}
					title="Copy Text Plugin for Sketch"
					subtitle="Copy text from multiple layers"
				/>
				<ProjectBox
					link="#"
					icon={<FirefoxLogo />}
					title="Firefox Developer Custom Theme"
					subtitle="Inspired on Ayu theme"
				/>
				<ProjectBox
					link="#"
					icon={<RocketIcon />}
					title="Local by flywheel Alfred Workflow"
					subtitle="SSH and more"
				/>
			</ProjectListWrapper>
		</Container>
	</ProjectListStyled>
)

export default ProjectList;
