import React from 'react'
import Rocket from "../images/rocket.inline.svg"
import styled from "styled-components"
const sassVariables = require('sass-extract-loader!../scss/_variables.scss').global;

/**
 * HomeHeroInnerWrapper styles.
 */
const HomeHeroInnerWrapper = styled.section`
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
		line-height: 1;

		span {
			display: block;
			margin-bottom: 1em;
			font-size: .279069904em; /* 19 */
		}
	}
`
/**
 * Planet Wrapper styles.
 */
const PlanetWrapper = styled.div`
	position: relative;
`
/**
 * Planet styles.
 */
const Planet = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: 100%;
	background-color: ${sassVariables["$primary-color-l"].value.hex};
	border-radius: 50%;
`
/**
 * Rocket styles.
 */
const RocketStyled = styled(Rocket)`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	margin-top: -6.307977737%; /* Target distance / Rocket height * 100 */
	margin-right: auto;
	margin-left: auto;
	max-width: 39.35483871%; /* Rocket target width / Planet width * 100 */
`

/**
 * HomeHero Component
 */
const HomeHero = props => (
	<HomeHeroInnerWrapper>
		<HomeHeroTitle>
			<h1><span className="text-capitalize">Hi, I’m</span> Cristian Guerra</h1>
			<p>a <span className="h6 text-uppercase text-color-primary">Web Developer</span> Launching stuff since 2009</p>
		</HomeHeroTitle>
		<PlanetWrapper style={props.style}>
			<Planet />
			<RocketStyled />
		</PlanetWrapper>
	</HomeHeroInnerWrapper>
)

export default HomeHero
