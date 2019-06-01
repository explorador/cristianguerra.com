import React from 'react'
import Rocket from "../images/rocket.inline.svg"
import styled from "styled-components"
const sassVariables = require('sass-extract-loader!../scss/_variables.scss').global;

/**
 * HomeHeroInnerWrapper styles.
 */
const HomeHeroInnerWrapper = styled.div`
	display: flex;
	align-items: center;

	> div {
		width: 50%;
	}
`

/**
 * HomeHeroTitle styles.
 */
const HomeHeroTitle = styled.div`
	h1 {
		margin-bottom: 0;
	}
`

/**
 * Planet styles.
 */
const PlanetWrapper = styled.div`
	position: relative;
`

const Planet = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: 100%;
	background-color: ${sassVariables["$red-l"].value.hex};
	border-radius: 50%;
`

const RocketStyled = styled(Rocket)`
	transform: translate(-50%, 0);
	position: absolute;
	top: -6.104129264%;
	left: 50%;
	max-width: 39.35483871%;
`

/**
 * HomeHero Component
 */
const HomeHero = props => (
	<HomeHeroInnerWrapper>
		<HomeHeroTitle>
			<h1>Hi, I’m
			Cristian Guerra</h1>
			<p>a Web Developer Launching stuff since 2009</p>
		</HomeHeroTitle>
		<PlanetWrapper style={props.style}>
			<Planet />
			<RocketStyled />
		</PlanetWrapper>
	</HomeHeroInnerWrapper>
)

export default HomeHero
