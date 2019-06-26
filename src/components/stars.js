import React from "react"
import { TweenMax, CSSPlugin } from "gsap/TweenMax"
import styled from "styled-components"
/* eslint-disable-next-line */
const plugins = [ CSSPlugin ] // "Prevents Tree Shaking" on Webpack.

/**
 * Star SVG wrapper styles.
 */
const StarWrapper = styled.div`
	position: absolute;
	/* "Position" prop. options: left | right */
	${ props =>
		( props.position === 'left' && `
			left: 0;
		`)
		|| ( props.position === 'right' && `
			right: 0;
		` )
		|| ( props.position !== ('left' || 'right') && `
			right: 0;
			left: 0;
		` )
	}
	/* "Opacity" prop. */
	${ props => ( props.opacity && `opacity: ${props.opacity};` ) }
	${ props => ( props.top && `top: ${props.top};` ) }
	z-index: -1;

	svg {
		margin-right: auto;
		margin-left: auto;
	}
`

export default class Stars extends React.Component {

	componentDidMount() {
		// Using React "ref" to get elements from DOM.
		this.smallDots = [ this.smallDots1, this.smallDots2, this.smallDots3 ];
		this.bigDots = [this.bigDot1, this.bigDot2, this.bigDot3, this.bigDot4];
		this.smallStars = [ this.smallStar1, this.smallStar2, this.smallStar3, this.smallStar4, this.smallStar5, this.smallStar6, this.smallStar7, this.smallStar8 ];
		this.stars = [ this.star1, this.star2, this.star3 ];
		this.smallPlanets = [ this.smallPlanet1, this.smallPlanet2, this.smallPlanet3 ];
		this.allDots = [ this.bigDots, this.smallDots ];
		this.allPlanets = [ this.smallPlanets, this.mediumPlanet, this.bigPlanet, this.biggestPlanet ];

		// Attributes for all elements.
		TweenMax.set( this.stars.concat( this.allPlanets, this.smallStars, this.allDots ), {
			transformOrigin: '50% 50%',
			position: 'relative',
		});

		// Small dots animation.
		TweenMax.staggerTo( this.smallDots, 20, {
			rotation: '360',
			svgOrigin:"154.4 255.5",
			repeat: -1,
		}, 15);

		// Stars animation (Normal size).
		TweenMax.staggerFrom( this.stars, 4, {
			rotation: '360',
			scale: 1.2,
			repeat: -1,
		}, 2 );

		// Smarll stars animation.
		TweenMax.staggerFrom( this.smallStars, 4, {
			rotation: '360',
			scale: 2,
			repeat: -1,
		}, 2 );

		// All planets animation.
		TweenMax.staggerTo( this.allPlanets.concat( this.bigDots ), 2, {
			y: '15px',
			repeat: -1,
			yoyo: true,
		}, .5);
	}

	render() {
		return (
			<StarWrapper className={ this.props.className } position={this.props.position} top={this.props.top} opacity={this.props.opacity}>
				<svg xmlns="http://www.w3.org/2000/svg" width="772" height="511" viewBox="0 0 772 511">
					<defs>
						<linearGradient id="a" x1="50%" x2="50%" y1="100%" y2=".036%">
							<stop offset="0%" stopColor="gray" stopOpacity=".25"/>
							<stop offset="54%" stopColor="gray" stopOpacity=".12"/>
							<stop offset="100%" stopColor="gray" stopOpacity=".1"/>
						</linearGradient>
						<linearGradient id="d" x1="49.972%" x2="49.972%" y1="99.913%" y2="-.087%">
							<stop offset="0%" stopColor="gray" stopOpacity=".25"/>
							<stop offset="54%" stopColor="gray" stopOpacity=".12"/>
							<stop offset="100%" stopColor="gray" stopOpacity=".1"/>
						</linearGradient>
					</defs>
					<g>
						<circle ref={ e => this.smallDots1 = e } className="tiny-planet" cx="769.5" cy="393.5" r="2.5" fill="#FFF" fillRule="nonzero"/>
						<circle ref={ e => this.smallDots2 = e } className="tiny-planet" cx="633.5" cy="178.5" r="2.5" fill="#FFF" fillRule="nonzero"/>
						<circle ref={ e => this.smallDots3 = e } className="tiny-planet" cx="746.5" cy="250.5" r="1.5" fill="#FFF" fillRule="nonzero"/>
						<circle ref={ e => this.bigDot1 = e } className="tiny-planet" cx="116.5" cy="239.5" r="4.5" fill="#FFF" fillRule="nonzero"/>
						<circle ref={ e => this.bigDot2 = e } className="tyny-planet" cx="421.5" cy="487.5" r="4.5" fill="#FFF" fillRule="nonzero"/>
						<circle ref={ e => this.bigDot3 = e } className="tiny-planet" cx="240.5" cy="508.5" r="2.5" fill="#FFF" fillRule="nonzero"/>
						<circle ref={ e => this.bigDot4 = e } className="tiny-planet" cx="191.5" cy="99.5" r="4.5" fill="#FFF" fillRule="nonzero"/>
						<path ref={ e => this.smallStar1 = e } className="small-star" fill="#FFF" fillRule="nonzero" d="M496 1.663h-1.663V0h-.674v1.663H492v.674h1.663V4h.674V2.337H496z"/>
						<path ref={ e => this.smallStar2 = e } className="small-star" fill="#FFF" fillRule="nonzero" d="M299 22.663h-1.663V21h-.674v1.663H295v.674h1.663V25h.674v-1.663H299z"/>
						<path ref={ e => this.smallStar3 = e } className="small-star" fill="#FFF" fillRule="nonzero" d="M4 329.663H2.337V328h-.674v1.663H0v.674h1.663V332h.674v-1.663H4z"/>
						<path ref={ e => this.smallStar4 = e } className="small-star" fill="#FFF" fillRule="nonzero" d="M76 472.663h-1.663V471h-.674v1.663H72v.674h1.663V475h.674v-1.663H76z"/>
						<path ref={ e => this.smallStar5 = e } className="small-star" fill="#FFF" fillRule="nonzero" d="M194 272.663h-1.663V271h-.674v1.663H190v.674h1.663V275h.674v-1.663H194z"/>
						<path ref={ e => this.smallStar6 = e } className="small-star" fill="#FFF" fillRule="nonzero" d="M216 200.663h-1.663V199h-.674v1.663H212v.674h1.663V203h.674v-1.663H216z"/>
						<path ref={ e => this.smallStar7 = e } className="small-star" fill="#FFF" fillRule="nonzero" d="M744 160.663h-1.663V159h-.674v1.663H740v.674h1.663V163h.674v-1.663H744z"/>
						<path ref={ e => this.smallStar8 = e } className="small-star" fill="#FFF" fillRule="nonzero" d="M598 264.663h-1.663V263h-.674v1.663H594v.674h1.663V267h.674v-1.663H598z"/>
						<path ref={ e => this.star1 = e } className="star" fill="#FFF" fillRule="nonzero" d="M74 388.742h-3.738V385h-1.524v3.742H65v1.524h3.738V394h1.524v-3.734H74z"/>
						<path ref={ e => this.star2 = e } className="star" fill="#FFF" fillRule="nonzero" d="M169 386.742h-3.738V383h-1.524v3.742H160v1.524h3.738V392h1.524v-3.734H169z"/>
						<path ref={ e => this.star3 = e } className="star" fill="#FFF" fillRule="nonzero" d="M306 463.742h-3.738V460h-1.524v3.742H297v1.524h3.738V469h1.524v-3.734H306z"/>
						<g ref={ e => this.smallPlanet1 = e } className="small-planet" fillRule="nonzero">
							<path fill="url(#a)" d="M166.546 464.843c0-6.31 5.111-11.421 11.421-11.421s11.421 5.111 11.421 11.421-5.111 11.421-11.421 11.421-11.421-5.111-11.421-11.421z" opacity=".7"/>
							<path fill="#000" d="M167 465c0-6.077 4.923-11 11-11s11 4.923 11 11-4.923 11-11 11-11-4.923-11-11z" opacity=".2"/>
						</g>
						<circle ref={ e => this.smallPlanet2 = e } className="small-planet" cx="597" cy="421" r="10" fill="#000" fillRule="nonzero" opacity=".2"/>
						<g ref={ e => this.mediumPlanet = e } className="medium-planet" fillRule="nonzero">
							<path fill="url(#d)" d="M563.525 357.708c0-5.304 4.296-9.6 9.6-9.6 5.304 0 9.6 4.296 9.6 9.6 0 5.304-4.296 9.6-9.6 9.6a9.598 9.598 0 0 1-9.6-9.6z" opacity=".7"/>
							<path fill="#000" d="M564 358c0-4.972 4.028-9 9-9s9 4.028 9 9-4.028 9-9 9-9-4.028-9-9z" opacity=".2"/>
						</g>
						<g ref={ e => this.bigPlanet = e } className="big-planet" fillRule="nonzero">
							<path fill="url(#d)" d="M212.03 308.016a20.11 20.11 0 0 0-5.942-5.266 19.96 19.96 0 0 0-22.91 1.895 20.014 20.014 0 0 0-5.96 22.227A19.98 19.98 0 0 0 196.097 340c.425 0 .833 0 1.266-.042a19.978 19.978 0 0 0 16.813-11.61 20.019 20.019 0 0 0-2.163-20.332h.017z"/>
							<circle cx="198" cy="322" r="19" fill="#000" fillRule="nonzero" opacity=".2" />
							<path fill="#000" d="M191.67 308.207c-.99.432-1.943.946-2.85 1.536a4.73 4.73 0 0 0-1.532 1.407 1.89 1.89 0 0 0 0 2.005 2.692 2.692 0 0 0 2.149.799c.83.11 1.676.024 2.47-.252a5.329 5.329 0 0 0 1.446-1.077l1.641-1.528c.576-.538 1.202-1.267.948-2.014a1.692 1.692 0 0 0-1.396-.972 5.686 5.686 0 0 0-4.12.747M183.447 327.455a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM201.632 320.911c0-2.146 1.565-3.884 3.496-3.884s3.496 1.738 3.496 3.884-1.565 3.884-3.496 3.884-3.496-1.738-3.496-3.884zM211.755 308.39a5.077 5.077 0 1 1-5.712-5.077 19.182 19.182 0 0 1 5.712 5.077zm-.463 23.182c-3.288 4.752-8.525 7.729-14.234 8.09v-.847c.003-3.428 1.908-6.562 4.925-8.103a8.83 8.83 0 0 1 9.342.818l-.033.042z" opacity=".1"/>
						</g>
						<g ref={ e => this.biggestPlanet = e } className="biggest-planet" fillRule="nonzero">
							<path fill="url(#d)" d="M584.137 152.48a29.25 29.25 0 0 0-8.637-7.602 29.016 29.016 0 0 0-33.14 2.91 28.994 28.994 0 0 0-8.612 32.124A29.008 29.008 0 0 0 560.992 199c.617 0 1.234 0 1.834-.068a29 29 0 0 0 24.527-16.832 28.984 28.984 0 0 0-3.208-29.568l-.008-.05z"/>
							<path fill="#000" d="M588 170.008c-.002 14.244-11.07 26.034-25.282 26.934-.557 0-1.131.058-1.705.058a26.996 26.996 0 0 1-25.383-17.761 27.003 27.003 0 0 1 8.02-29.927 26.992 26.992 0 0 1 30.86-2.685 27.105 27.105 0 0 1 8.034 7.12A26.87 26.87 0 0 1 588 170.008z" opacity=".2"/>
							<path fill="#000" d="M553.795 153.269a30.413 30.413 0 0 0-4.132 2.059 6.39 6.39 0 0 0-2.213 1.872 2.313 2.313 0 0 0-.051 2.673c.675.872 1.972 1.001 3.117 1.066a8.41 8.41 0 0 0 3.569-.34 7.684 7.684 0 0 0 2.083-1.429l2.383-2.043c.853-.71 1.707-1.687 1.374-2.688-.4-.727-1.161-1.213-2.023-1.292a8.885 8.885 0 0 0-5.978.993M543.218 181.365a1.282 1.282 0 1 1 2.563 0 1.282 1.282 0 0 1-2.563 0zM568.389 172c0-2.965 2.37-5.366 5.297-5.366 2.927 0 5.297 2.401 5.297 5.366s-2.37 5.366-5.297 5.366c-2.927 0-5.297-2.401-5.297-5.366zM582.658 153.883a7.117 7.117 0 1 1-8.058-7.133 27.158 27.158 0 0 1 8.058 7.133zm.64 32.192c-4.785 6.707-12.407 10.908-20.714 11.417 0-.375-.05-.75-.05-1.134.004-4.84 2.776-9.264 7.166-11.438a13.18 13.18 0 0 1 13.598 1.155z" opacity=".1"/>
						</g>
						<path className="triangle" fill="#FFF" d="M648 344l18 9.843L651.947 370" opacity=".2"/>
					</g>
				</svg>
			</StarWrapper>
		)
	}
}
