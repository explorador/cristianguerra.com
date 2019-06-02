import React from "react"
import styled from "styled-components"
import SketchLogo from "../images/sketch-logo.inline.svg"
import FirefoxLogo from "../images/firefox-logo.inline.svg"
import RocketIcon from "../images/rocket-icon.inline.svg"

/**
 * Project List "section" wrapper styles.
 */
const ProjectListStyled = styled.section`
	padding-top: 3em;
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
	border: solid 1px rgba(255,255,255,.4);
	border-radius: 5px;
	margin: 0 45px 45px;
	padding: 35px 15px;
	width: 219px;
	text-align: center;
	transition: border-color ease .2s;

	&:hover {
		border-color: white;
	}
`

/**
 * <ProjectBox /> component.
 * @param {object} props Component props.
 */
const ProjectBox = props => (
	<ProjectBoxStyled>
		{props.icon}
		<h3 className="p">{props.title}</h3>
		<p className="text-small">{props.subtitle}</p>
	</ProjectBoxStyled>
)

/**
 * <ProjectList /> component (Main component).
 */
const ProjectList = () => (
	<ProjectListStyled>
		<h2 className="text-center">Stuff From My Lab</h2>

		<ProjectListWrapper>
			<ProjectBox
				icon={<SketchLogo />}
				title="Copy Text Plugin for Sketch"
				subtitle="Copy text from multiple layers"
			/>
			<ProjectBox
				icon={<FirefoxLogo />}
				title="Firefox Developer Custom Theme"
				subtitle="Inspired on Ayu theme"
			/>
			<ProjectBox
				icon={<RocketIcon />}
				title="Local by flywheel Alfred Workflow"
				subtitle="SSH and more"
			/>
		</ProjectListWrapper>
	</ProjectListStyled>
)

export default ProjectList;
