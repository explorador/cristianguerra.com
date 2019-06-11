import React from "react"
import { TweenMax, TimelineMax, TweenLite, CSSPlugin } from "gsap/TweenMax"
import { rem } from "polished"
import styled from "styled-components"
/* eslint-disable-next-line */
const plugins = [ CSSPlugin ] // "Prevents Tree Shaking" on Webpack.

/**
 * Styling animation wrapper.
 */
const StyledAnimation = styled.div`
	margin-bottom: ${ rem( 40 ) };

	svg {
		margin: 0 auto;
	}
`

/**
 * AboutAnimation class component.
 */
export default class AboutAnimation extends React.Component {
	componentDidMount() {
		this.AllStars = [ this.Star1, this.Star2, this.Star3, this.Star4, this.Star5, this.Star6, this.Star7, this.Star8, this.Star9 ];

		// Stars animation.
		TweenMax.set( this.AllStars, {
			position: "relative",
		} );

		TweenMax.staggerTo( this.AllStars, 2, {
			y: "10px",
			yoyo: true,
			repeat: -1,
		}, .5 );

		// Fire animation.
		const fireElements = [ this.Fire, this.GuyLight1, this.GuyLight2, this.FireAsh ];
		let fireElementsAnimation = new TimelineMax({ repeat: -1, repeatDelay: 1, yoyo: true });
		fireElementsAnimation.add( TweenLite.to( fireElements, .5, { fill: "#F59D45" } ) );
		fireElementsAnimation.add( TweenLite.to( fireElements, .5, { fill: "#F5BA45" } ) );
		fireElementsAnimation.add( TweenLite.to( fireElements, .4, { fill: "#F56245" } ) );
		fireElementsAnimation.add( TweenLite.to( fireElements, .5, { fill: "#F5BA45" } ) );
		fireElementsAnimation.add( TweenLite.to( fireElements, .3, { fill: "#F59D45" } ) );

		TweenMax.set( this.Fire, {
			transformOrigin: '50% 100%',
		} );

		let fireAnimation = new TimelineMax({ repeat: -1, repeatDelay: .7, yoyo: true });
		fireAnimation.add( TweenLite.to( [ this.Fire, this.InnerFire ], .7, { scale: .95, rotation: 3 } ) );
		fireAnimation.add( TweenLite.to( [ this.Fire, this.InnerFire ], .7, { scale: 1, rotation: -3 } ) );
		fireAnimation.add( TweenLite.to( [ this.Fire, this.InnerFire ], .7, { scale: .95, rotation: 4 } ) );
		fireAnimation.add( TweenLite.to( [ this.Fire, this.InnerFire ], .7, { scale: .95, rotation: 0 } ) );
	}

	render() {
		return (
			<StyledAnimation>
				<svg width="626" height="323" viewBox="0 0 626 323" xmlns="http://www.w3.org/2000/svg">
					<g fillRule="nonzero" fill="none">
						<circle ref={ e => this.Star1 = e } fill="#F2F2F2" cx="294.5" cy="3.5" r="3.5"/>
						<circle ref={ e => this.Star2 = e } fill="#F2F2F2" cx="182.5" cy="120.5" r="1.5"/>
						<circle ref={ e => this.Star3 = e } fill="#F2F2F2" cx="392.5" cy="187.5" r="1.5"/>
						<circle ref={ e => this.Star4 = e } fill="#F2F2F2" cx="22.5" cy="169.5" r="1.5"/>
						<circle ref={ e => this.Star5 = e } fill="#F2F2F2" cx="576.5" cy="118.5" r="1.5"/>
						<circle ref={ e => this.Star6 = e } fill="#F2F2F2" cx="120.5" cy="133.5" r="1.5"/>
						<circle ref={ e => this.Star7 = e } fill="#F2F2F2" cx="353.5" cy="105.5" r="1.5"/>
						<circle ref={ e => this.Star8 = e } fill="#F2F2F2" cx="400.5" cy="3.5" r="1.5"/>
						<path ref={ e => this.Star9 = e } fill="#F2F2F2" d="M104 171h1v1h-1zM145 62h1v1h-1zM248 143h1v1h-1zM519 174h1v1h-1zM434 66h1v1h-1z"/>
						<g ref={ e => this.Trees = e } fill="#535461">
							<path d="M53 266.822c-5.668-7.194-22.866-31.384-23-60.21C29.842 172.096 54.21 144 54.21 144s1.01 1.142 2.62 3.25C65.844 119.925 82.129 101 82.129 101s17.598 20.073 26.641 48.824c2.631-3.736 4.442-5.824 4.442-5.824s24.629 27.87 24.788 62.387c.138 29.86-18.08 54.914-22.999 61.132V323h-2v-54.935c-2.422-2.944-9.949-12.635-15.935-26.2-5.525 9.934-10.819 16.94-13.065 19.757V323h-3v-62.279c-2.311-2.917-6.494-8.522-11.018-16.146C63.744 258.029 56.334 267.158 55 268.75V323h-2v-56.178zM461 297.519V323h-2v-24.935c-4.212-5.119-23.857-30.636-24-61.452-.159-34.518 24.21-62.613 24.21-62.613s24.63 27.87 24.79 62.387c.137 29.86-18.081 54.914-23 61.132zM214 268.065c-4.212-5.119-23.857-30.636-24-61.452-.159-34.518 24.21-62.613 24.21-62.613s1.307 1.478 3.32 4.175C226.475 120.353 243.128 101 243.128 101s17.598 20.073 26.641 48.824c2.631-3.736 4.442-5.824 4.442-5.824s24.629 27.87 24.788 62.387c.138 29.86-18.08 54.914-22.999 61.132V323h-2v-54.935c-2.422-2.944-9.95-12.635-15.935-26.2-5.525 9.934-10.819 16.94-13.065 19.757V323h-3v-62.279c-2.407-3.038-6.843-8.99-11.58-17.102-5.388 11.907-11.796 20.583-14.42 23.9V323h-2v-54.935z"/>
						</g>
						<path d="M621.946 319c1.134 0 2.054-.895 2.054-2s-.92-2-2.054-2h-16.892c1.135 2.21.215 4.895-2.054 6 0 1.105.92 2 2.054 2h16.892c.734 0 1.412-.381 1.779-1a1.954 1.954 0 0 0 0-2 2.065 2.065 0 0 0-1.78-1z" fill="#535461" opacity=".1"/>
						<path className="guy" d="M569.604 309.013a5.64 5.64 0 0 1-.443-.203 2.076 2.076 0 0 1-1.097-1.922c.005-.038.017-.073.024-.11-.505-.277-1.01-.551-1.536-.786a.478.478 0 0 1-.467-.746c.092-.616.33-1.199.48-1.802.075-.38.17-.756.285-1.126l.012-.031a.26.26 0 0 0 .191-.11.324.324 0 0 0 .016-.17c-.003-.06 0-.12.006-.18.245-.411.512-.809.801-1.19.507-.72.946-1.485 1.384-2.249.36-.626.72-1.253 1.016-1.911.224-.493.411-1.003.658-1.485a9.596 9.596 0 0 1 4.15-3.887 41.024 41.024 0 0 1 4.475-1.906.429.429 0 0 1-.092-.07.69.69 0 0 1-.127-.51c.023-.366-.202-1.552.005-1.856a2.16 2.16 0 0 0 .228-.36c.187-.443-.107-.964.017-1.43.09-.254.245-.481.45-.657.237-.234.483-.458.74-.67.187-.165.395-.304.62-.414.91-.406 1.977.115 2.959-.058.286-.078.578-.136.872-.174a1.697 1.697 0 0 1 1.467.974c.08.152.143.312.232.46.125.205.296.38.5.507.148.072.284.167.402.281a.919.919 0 0 1 .132.693 2.074 2.074 0 0 1-.27.875c-.152.255-.4.439-.687.509.38.974.253 2.074-.338 2.936a3.146 3.146 0 0 1-2.613 1.368 3.118 3.118 0 0 1-.413-.042c-.089.06-.219.096-.312.147-.389.2-.759.434-1.104.702a2.824 2.824 0 0 0-.47.49c.018.019.045.03.062.051.092.14.152.297.175.462a9.716 9.716 0 0 0 .071 1.997c-.004.3-.047.597-.128.885a.425.425 0 0 1-.099.32 5.772 5.772 0 0 1-.136.354c.019.02.037.04.056.058a.706.706 0 0 1 .196.648c-.03.093-.052.19-.063.287.012.12.047.235.103.341.004.011.005.024.009.035.449-.07.898-.138 1.35-.189.791-.09 1.709-.104 2.244.487.29.397.476.86.542 1.347.177.8.466 1.57.857 2.289.278.43.529.876.75 1.338.03.074.053.15.078.226l.06.034c.366.185.704.425 1 .712.305.36.537.777.682 1.227.065.15.105.31.118.474a.541.541 0 0 1-.175.439.78.78 0 0 1-.494.12c-.102.001-.204-.005-.306-.007a9.187 9.187 0 0 0 2.637 3.421c-.012.032-.03.06-.042.09.244.116.482.247.711.391-.017-.151-.16-.302-.123-.437.095-.344.758-.123.922.045.178.182.255.443.43.629.117.112.252.205.398.276l1.028.568c.158.093.324.172.497.235.194.054.39.095.59.123.285.054.564.136.832.247.202.082.427.225.426.444a.483.483 0 0 1-.124.286 2.5 2.5 0 0 1-1.771.695c-.692.073-1.391.136-2.087.143.253.152.443.389.537.668a.744.744 0 0 1-.002.257l.022.014a130.008 130.008 0 0 1 1.91 1.244.583.583 0 0 1 .079-.074.813.813 0 0 1 .883.063c.248.193.475.411.678.65.545.51 1.205.878 1.924 1.074.716.193 1.441.349 2.173.465.147.02.288.066.419.135.285.21.41.577.31.918-.104.331-.29.63-.541.87a2.17 2.17 0 0 1-.72.558c-.234.086-.48.132-.73.138a12.365 12.365 0 0 1-3.595-.282 9.838 9.838 0 0 0-1.318-.264c-.271-.024-.545-.016-.816-.034a4.264 4.264 0 0 1-1.556-.412.551.551 0 0 1-.284-.236.59.59 0 0 1-.021-.312l.18-1.582c.016-.137.062-.308.198-.33.003 0 .006.002.009.001a6.015 6.015 0 0 0-.295-.342 2.888 2.888 0 0 1-.358-.468c-.076.05-.15.104-.229.15a1.671 1.671 0 0 0-.732.64 5.784 5.784 0 0 1-2.36-2.184 15.23 15.23 0 0 0-1.959-2.58 6.883 6.883 0 0 1-1.02-.998c-.418-.595-.532-1.41-1.096-1.869a2.856 2.856 0 0 0-2.11-.328 51.674 51.674 0 0 1-5.171.239c3.344.774 5.478 2.237 5.549 4.865.291 10.792-6.54 8.041-14.822 8.041s-15.113 1.376-15.169-8.04c-.027-4.637 6.763-5.646 15.045-5.646.527 0 1.047.004 1.56.013z" fill="#535461"/>
						<path ref={ e => this.GuyLight2 = e } d="M600.797 301.16l-11.46 3.819c.143.24.258.495.343.762.065.151.104.312.117.476a.548.548 0 0 1-.173.44.765.765 0 0 1-.49.122c-.1.001-.202-.005-.303-.008a9.215 9.215 0 0 0 2.613 3.438c-.012.031-.03.059-.042.09.242.116.478.248.705.393-.017-.152-.16-.303-.122-.44.094-.345.751-.123.913.045.177.183.253.446.426.632.117.113.25.207.394.278l1.02.57c.156.094.32.173.492.237.192.054.387.095.584.124.283.053.559.136.825.247.2.083.422.226.422.446a.488.488 0 0 1-.123.288 2.459 2.459 0 0 1-1.755.697c-.685.074-1.378.138-2.068.145.25.152.44.39.532.67a.758.758 0 0 1-.001.259l.022.014a128.635 128.635 0 0 1 1.892 1.25.581.581 0 0 1 .078-.075.797.797 0 0 1 .875.063c.245.195.47.414.672.654.54.511 1.194.881 1.906 1.078.709.194 1.428.35 2.153.468.145.02.286.065.415.135.283.211.406.58.308.922a2.058 2.058 0 0 1-.537.873c-.196.237-.44.428-.713.562a2.234 2.234 0 0 1-.723.139c-.63.042-1.262.035-1.89-.021.18-.013.359-.053.528-.118.274-.134.517-.325.713-.562.25-.24.434-.54.537-.873a.856.856 0 0 0-.308-.922c-.129-.07-.27-.116-.414-.135a20.437 20.437 0 0 1-2.154-.468 4.517 4.517 0 0 1-1.906-1.078 4.623 4.623 0 0 0-.671-.654.797.797 0 0 0-.876-.063.581.581 0 0 0-.077.074 113.872 113.872 0 0 0-1.893-1.25l-.022-.013a.758.758 0 0 0 .002-.258 1.244 1.244 0 0 0-.532-.671c.69-.007 1.382-.071 2.067-.145a2.459 2.459 0 0 0 1.756-.697.488.488 0 0 0 .122-.288c0-.22-.222-.363-.422-.446a4.188 4.188 0 0 0-.824-.247 4.45 4.45 0 0 1-.585-.124 2.926 2.926 0 0 1-.492-.237l-1.02-.57a1.555 1.555 0 0 1-.393-.278c-.173-.186-.25-.449-.426-.632-.163-.168-.82-.39-.913-.045-.038.137.104.288.121.44a6.852 6.852 0 0 0-.705-.394c.013-.03.03-.058.042-.09a9.215 9.215 0 0 1-2.612-3.437c.1.003.202.01.303.008a.765.765 0 0 0 .49-.121.548.548 0 0 0 .173-.441 1.515 1.515 0 0 0-.118-.476 3.655 3.655 0 0 0-.676-1.233 4.06 4.06 0 0 0-.99-.715l-.06-.034c-.024-.076-.047-.153-.077-.227-.22-.464-.467-.913-.743-1.344a8.883 8.883 0 0 1-.85-2.3 2.99 2.99 0 0 0-.536-1.353 1.478 1.478 0 0 0-.663-.414c.175-.025.349-.055.524-.075.784-.09 1.693-.105 2.224.49.287.398.471.863.536 1.352.176.803.462 1.577.85 2.3.275.431.523.88.743 1.344.03.074.052.151.077.227l.059.034c.31.16.6.358.86.592l11.573-3.856a39.48 39.48 0 0 1-.14-.262c-.919-1.748.43-1.942 1.397-2.149.948-.203 1.647-.337 2.08 1.299l1.498-.499.225.674-1.569.522c.32 1.855-.64 1.364-1.524 1.552-.827.177-.807.876-1.616-.505z" fill="#F55F44"/>
						<path ref={ e => this.GuyLight1 = e } d="M583.767 283.953c.076.148.136.305.22.449.12.201.283.371.478.496.141.07.27.163.383.275.128.2.174.444.126.677-.022.302-.11.595-.257.857-.145.25-.381.428-.656.497a3.099 3.099 0 0 1-.403 3.06 2.91 2.91 0 0 1-2.806 1.109c-.085.057-.209.093-.298.143a6.73 6.73 0 0 0-1.053.686c-.168.14-.319.301-.45.479.019.02.045.03.06.051.088.136.145.29.168.451a9.737 9.737 0 0 0 .067 1.954 3.401 3.401 0 0 1-.122.865.423.423 0 0 1-.094.313c-.04.117-.083.232-.13.346.018.02.035.04.053.057a.702.702 0 0 1 .188.633c-.03.092-.05.186-.061.281a.92.92 0 0 0 .098.334c.005.01.005.023.01.034a30.32 30.32 0 0 1 1.287-.185 6.16 6.16 0 0 1 .64-.043.465.465 0 0 1-.028-.14c.01-.095.031-.19.06-.28a.702.702 0 0 0-.186-.634l-.054-.057c.047-.114.09-.23.13-.346a.423.423 0 0 0 .094-.313c.078-.282.12-.573.123-.865a9.737 9.737 0 0 1-.068-1.954 1.112 1.112 0 0 0-.167-.451c-.016-.022-.042-.032-.06-.051.13-.178.281-.338.449-.479a6.73 6.73 0 0 1 1.053-.686c.09-.05.213-.086.298-.143.13.022.262.036.394.04a2.98 2.98 0 0 0 2.494-1.338 3.158 3.158 0 0 0 .322-2.871c.274-.069.51-.248.655-.497.147-.262.235-.555.258-.857a.917.917 0 0 0-.126-.677 1.473 1.473 0 0 0-.383-.275 1.49 1.49 0 0 1-.478-.496c-.084-.144-.145-.3-.221-.45a1.619 1.619 0 0 0-1.4-.952c-.28.037-.558.094-.832.17a2.466 2.466 0 0 1-.463.032c.291.181.53.44.688.75z" fill="#F55F44"/>
						<path d="M581.685 283.546c.106-.03.21-.075.315-.117a1.526 1.526 0 0 0-1 .151c.228.033.458.021.685-.034z" fill="#FF6584"/>
						<path d="M589.426 317.444c.05.046.098.093.148.136-.037-.053-.077-.105-.11-.16l-.038.024z" fill="#FF6584"/>
						<path ref={ e => this.FireRight = e } d="M621 311.394c0 7.385-3.358 5.349-7.5 5.349-4.142 0-7.5 2.036-7.5-5.349S613 294 617 290c1 8 4 14.01 4 21.394z" fill="#F55F44" opacity="0"/>
						<path ref={ e => this.FireLeft = e } d="M621 311.394c0 7.385-3.358 5.349-7.5 5.349-4.142 0-7.5 2.036-7.5-5.349S608 296 611 290c1 4 10 14.01 10 21.394z" fill="#F55F44" opacity="0"/>
						<path ref={ e => this.Fire = e } d="M621 311.394c0 7.385-3.358 5.349-7.5 5.349-4.142 0-7.5 2.036-7.5-5.349S613.5 290 613.5 290s7.5 14.01 7.5 21.394z" fill="#F55F44"/>
						<path ref={ e => this.InnerFire = e } d="M617 313.509c0 3.282-1.567 2.377-3.5 2.377s-3.5.905-3.5-2.377c0-3.283 3.5-9.509 3.5-9.509s3.5 6.226 3.5 9.509z" fill="#000" opacity=".1"/>
						<path ref={ e => this.InnerFireLeft = e } d="M617 313.509c0 3.282-1.567 2.377-3.5 2.377s-3.5.905-3.5-2.377c0-3.283 1-6.509 2-9.509 2 4 5 6.226 5 9.509z" fill="#000" opacity="0"/>
						<path ref={ e => this.InnerFireRight = e } d="M617 313.509c0 3.282-1.567 2.377-3.5 2.377s-3.5.905-3.5-2.377c0-3.283 2-6.509 5-9.509 0 5 2 6.226 2 9.509z" fill="#000" opacity="0"/>
						<g ref={ e => this.FireAsh = e } fill="#FF6584">
							<path d="M623 291s2.04-1.514 2-3M607 278s-.634-2.224-2-3M592 248s-.634-2.224-2-3M610 288s-.634-2.224-2-3M608 253s-.634-2.224-2-3M604 266s-.634-2.224-2-3M622 313s2.04-1.514 2-3M624 301s2.04-1.514 2-3"/>
						</g>
						<path ref={ e => this.MoonLight = e } fill="#F2F2F2" opacity=".1" d="M360.594 163.412l-15.49-14.256-.138.035-6.203-5.644-.3-.088.323-.122-65.965-60.708L209.116 24l-32.46 17.234-2.656.589 38.901 58.765L360.127 323H534L360.595 163.413z"/>
						<circle ref={ e => this.Moon = e } fill="#F2F2F2" cx="191" cy="32" r="19"/>
						<path d="M166.037 311.191c-.316-4.374 1.48-8.191 1.48-8.191s4.697 3.25 6.069 8.496c1.087 4.16-.243 8.327-.84 9.874.203.993.254 1.63.254 1.63s-5.796-.325-9.662-4.191C159.472 314.943 159 309 159 309s3.614.203 7.037 2.191zM368.037 311.191c-.316-4.374 1.48-8.191 1.48-8.191s4.697 3.25 6.069 8.496c1.087 4.16-.243 8.327-.84 9.874.203.993.254 1.63.254 1.63s-5.796-.325-9.662-4.191C361.472 314.943 361 309 361 309s3.614.203 7.037 2.191zM7.037 311.191c-.316-4.374 1.48-8.191 1.48-8.191s4.697 3.25 6.069 8.496c1.087 4.16-.243 8.327-.84 9.874.203.993.254 1.63.254 1.63s-5.796-.325-9.662-4.191C.472 314.943 0 309 0 309s3.614.203 7.037 2.191z" fill="#535461"/>
					</g>
				</svg>
			</StyledAnimation>
		)
	}
}
