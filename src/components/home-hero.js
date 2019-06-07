import React from 'react'
import Rocket from "../images/rocket.inline.svg"
import styled from "styled-components"
import { rem } from "polished"
import Parallax from 'parallax-js'
import Stars from "./stars"

/**
 * HomeHeroInnerWrapper styles.
 */
const HomeHeroInnerWrapper = styled.section`
	display: flex;
	align-items: center;
	padding-top: ${ props => rem( 90 ) };
	padding-bottom: ${ props => rem( 60 ) };

	> div {
		flex-grow: 1;
	}

	@media only screen and ( max-width: ${ props => props.theme.medium }px ) {
		flex-direction: column;
		padding-top: ${ props => rem( 60 ) };
		text-align: center;
	}

	@media only screen and ( max-width: ${ props => props.theme.medium }px ) {
		padding-top: ${ props => rem( 30 ) };
		padding-bottom: ${ props => rem( 40 ) };
	}
`
/**
 * HomeHeroTitle styles.
 */
const HomeHeroTitle = styled.div`
	padding-right: ${ rem( 20 ) };

	@media only screen and ( max-width: ${ props => props.theme.medium }px ) {
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
	width: 40%;

	@media only screen and ( max-width: ${ props => props.theme.medium }px ) {
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
	max-width: 39.35483871%; /* Rocket target width / Planet width * 100 */
`

const StarStyled = styled(Stars)`
	height: 100%;
	top: ${ rem( -15 ) };

	svg {
		height: 100%;
	}
`

/**
 * HomeHero Component
 */
export default class HomeHero extends React.Component {

	componentDidMount() {
		// eslint-disable-next-line
		const parallaxPlanet = new Parallax( this.planetWrapper, {
			scalarX: 20,
		});
	}

	render() {
		return (
			<HomeHeroInnerWrapper>
				<Stars opacity=".7" />
				<Stars position="left" opacity=".3" />
				<HomeHeroTitle>
					<h1><span className="text-capitalize">Hi, I’m</span> Cristian Guerra</h1>
					<p>a <span className="h6 text-uppercase text-color-primary">Web Developer</span> Launching stuff since 2009</p>
				</HomeHeroTitle>
				<PlanetWrapper ref={ e => this.planetWrapper = e }>
					<Planet data-depth=".6" />
					<RocketStyled data-depth=".2" />
					<StarStyled />
				</PlanetWrapper>
			</HomeHeroInnerWrapper>
		)
	}
}
