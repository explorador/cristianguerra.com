import React from "react"
import Container from "./container"
import Rocket from "../images/rocket.inline.svg"
import styled from "styled-components"
import { rem, adjustHue } from "polished"
import mediaquery from "../functions/media-queries.js";
import Stars from "./stars"

/**
 * HomeHeroInnerWrapper styles.
 */
const HomeHeroInnerWrapper = styled(Container)`
	display: flex;
	align-items: center;
	padding-top: ${ rem( 90 ) };
	padding-bottom: ${ rem( 60 ) };

	${ mediaquery('md-down') } {
		flex-direction: column;
		padding-top: ${ rem( 30 ) };
		text-align: center;
	}
`
/**
 * HomeHeroTitle styles.
 */
const HomeHeroTitle = styled.div`
	padding-right: ${ rem( 20 ) };
	flex-grow: 1;
	flex-shrink: 0;

	${ mediaquery('md-down') } {
		padding-right: 0;
		padding-bottom: ${ rem( 25 ) };
	}

	h1 {
		margin-bottom: 0;
		line-height: .85;

		span {
			display: block;
			font-size: .279069904em; /* ( font-base size / context ) */
		}
	}

	p {
		line-height: 1.2;
	}
`
/**
 * Planet Wrapper styles.
 */
const PlanetWrapper = styled.div`
	position: relative;
	max-width: 45%;
	width: 100%;
	z-index: 10;

	${ mediaquery('md-down') } {
		padding-right: ${ rem( 25 ) };
		padding-left: ${ rem( 25 ) };
		width: 100%;
		max-width: ${ rem( 344 ) };
	}
`
/**
 * Planet styles.
 */
const Planet = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: 100%;
	background-color: ${props => props.theme.primaryColorL};
	background-image: linear-gradient(180deg, ${ props => props.theme.primaryColorL && adjustHue(20, props.theme.primaryColorL)} 0%, ${props => props.theme.primaryColorL } 84%);
	border-radius: 50%;
	z-index: -2;
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
	max-width: 46.953405018%; /* Rocket target width / Planet width * 100 */
`

/**
 * HomeHero Component
 */
const HomeHero = () => {
	return (
		<section>
			<Stars transparency=".7" />
			<Stars className="hide-xs hide-sm hide-md" position="left" transparency=".3" />
			<Stars className="hide-xs hide-sm hide-md hide-lg" position="right" transparency=".3" />
			<HomeHeroInnerWrapper mediumWidth>
				<HomeHeroTitle>
					<h1><span className="text-capitalize">Hi, I’m</span> Cristian Guerra</h1>
					<p>a <span className="h6 text-uppercase text-color-primary">Web Developer</span> Launching stuff since 2009</p>
				</HomeHeroTitle>
				<PlanetWrapper>
					<Planet aria-hidden="true" />
					<RocketStyled />
				</PlanetWrapper>
			</HomeHeroInnerWrapper>
		</section>
	)
}

export default HomeHero
