import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import { em } from "polished"
import SketchLogo from "../images/sketch-logo.inline.svg"
import FirefoxLogo from "../images/firefox-logo.inline.svg"
import RocketIcon from "../images/rocket-icon.inline.svg"

/**
 * Project List "section" wrapper styles.
 */
const ProjectListStyled = styled.section`
	padding-top: ${ props => em( 60, props.theme.baseFontSize ) };
	padding-bottom: ${ props => em( 60, props.theme.baseFontSize ) };
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
	margin: 0 45px 45px;
	width: 219px;
	text-align: center;
	border: solid 1px ${ props => props.theme.gray };
	border-radius: 5px;
	transition: border-color ease .2s;

	svg {
		fill: ${ props => props.theme.gray };
		transition: fill ease .2s;
	}

	a {
		display: block;
		height: 100%;
		padding: 35px 15px;
		text-decoration: none;
	}

	&:hover {
		border-color: ${ props => props.theme.white };

		svg {
			fill: ${ props => props.theme.white }
		}
	}
`

/**
 * Project title styles.
 */
const ProjectTitle = styled.h3`
	margin-bottom: 0;
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
		<h2 className="h3 text-center">Stuff From My Lab</h2>

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
	</ProjectListStyled>
)

export default ProjectList;
