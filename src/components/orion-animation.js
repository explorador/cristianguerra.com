import React from "react"
import styled from "styled-components"
import { TweenMax, CSSPlugin } from "gsap/TweenMax"
/* eslint-disable-next-line */
const plugins = [ CSSPlugin ] // "Prevents Tree Shaking" on Webpack.

/**
 * Styles for <OrionStyled /> component.
 */
const OrionStyled = styled.div`
	position: absolute;
	left: 5%;
	max-width: 25%;

	.orion-star {
		fill: url(#orion-star-gradient) #b1b1b1;
		opacity: .5;
	}

	.orion-imaginary-line {
		fill: #535461;
		opacity: .2;
	}
`

// <Orion /> component animation.
export default class orion extends React.Component {
	componentDidMount() {
		// Get all elements.
		let stars = Object.keys(this).map((x) => this[x]);
		// Get only elements with the class "orion-star".
		this.orionStars = stars.filter( element =>
			typeof element === 'object' &&
			element !== null &&
			element.classList !== undefined &&
			element.classList.value.includes('orion-star')
		);

		// Animate all stars.
		TweenMax.staggerFrom( this.orionStars, 1, {
			scale: .8,
			repeat: -1,
			yoyo: true,
			opacity: .3,
		}, .4 );
	}

	render() {
		return (
			<OrionStyled aria-hidden="true">
				<svg width="504px" height="511px" viewBox="0 0 504 511" version="1.1"
				xmlns="http://www.w3.org/2000/svg">
					<title>orion</title>
					<defs>
						<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="orion-star-gradient">
							<stop stopColor="#B7B7B7" offset="0%"></stop>
							<stop stopColor="#818080" offset="100%"></stop>
						</linearGradient>
					</defs>
					<g id="orion">
						<polygon className="orion-imaginary-line" points="8.55771408 43.4120817 26.5577141 106.412082 29.4422859 105.587918 11.4422859 42.5879183"></polygon>
						<polygon className="orion-imaginary-line" points="44.8928413 123.683553 43.1071587 126.094225 119.145284 182.418762 73.7192347 115.160452 71.2331463 116.839548 106.854716 169.581238"></polygon>
						<polygon className="orion-imaginary-line" points="70 95 70 20 67 20 67 95"></polygon>
						<polygon className="orion-imaginary-line" points="129.281722 190.316843 162.281722 208.316843 163.718278 205.683157 130.718278 187.683157"></polygon>
						<polygon className="orion-imaginary-line" points="186.209007 197.887864 233.209007 133.887864 230.790993 132.112136 183.790993 196.112136"></polygon>
						<polygon className="orion-imaginary-line" points="256.247423 131.297547 306.247423 160.297547 307.752577 157.702453 257.752577 128.702453"></polygon>
						<polygon className="orion-imaginary-line" points="329.768915 160.287932 463.768915 80.2879324 462.231085 77.7120676 328.231085 157.712068"></polygon>
						<polygon className="orion-imaginary-line" points="185.966179 223.086837 308.966179 340.086837 311.033821 337.913163 188.033821 220.913163"></polygon>
						<polygon className="orion-imaginary-line" points="322.542719 360.355434 352.542719 483.355434 355.457281 482.644566 325.457281 359.644566"></polygon>
						<polygon className="orion-imaginary-line" points="373.857919 492.230437 482.857919 416.230437 481.142081 413.769563 372.142081 489.769563"></polygon>
						<polygon className="orion-imaginary-line" points="484.889139 394.791931 359.889139 302.791931 358.110861 305.208069 483.110861 397.208069"></polygon>
						<polygon className="orion-imaginary-line" points="345.467525 283.689562 323.467525 179.689562 320.532475 180.310438 342.532475 284.310438"></polygon>
						<polygon className="orion-imaginary-line" points="364.322677 375.292522 341.322677 332.292522 338.677323 333.707478 361.677323 376.707478"></polygon>
						<polygon className="orion-imaginary-line" points="492.479591 145.753402 486.479591 109.753402 483.520409 110.246598 489.520409 146.246598"></polygon>
						<polygon className="orion-imaginary-line" points="466.323529 61.2941176 458.323529 46.2941176 455.676471 47.7058824 463.676471 62.7058824"></polygon>
						<polygon className="orion-imaginary-line" points="447.557086 31.607285 427.557086 23.607285 426.442914 26.392715 446.442914 34.392715"></polygon>
						<path ref={ e => this.orionStar1 = e } className="orion-star" d="M12.6865038,28.9251326 C14.9411298,32.0654456 14.2209588,36.4332426 11.0804408,38.6897671 C7.93992278,40.9401543 3.56570288,40.2200304 1.31312284,37.0797174 C-0.941503132,33.9394044 -0.221332221,29.5654701 2.92532363,27.3130371 C6.06584166,25.0585583 10.4400616,25.7786822 12.6865038,28.9251326"></path>
						<path ref={ e => this.orionStar2 = e } className="orion-star" d="M38.9668803,115.298813 C40.7392607,117.76608 40.1745908,121.195741 37.7069227,122.971852 C35.2392547,124.737917 31.8030069,124.173338 30.0306264,121.704063 C28.2602554,119.236796 28.8269349,115.801107 31.2986219,114.031024 C33.7682995,112.260941 37.2005283,112.825519 38.9668803,115.298813"></path>
						<path ref={ e => this.orionStar3 = e } className="orion-star" d="M70.9677994,103.297088 C72.7397839,105.76252 72.1732311,109.196442 69.7061142,110.968659 C67.2369883,112.738867 63.799499,112.174249 62.0295235,109.704799 C60.261557,107.237358 60.8261009,103.803436 63.2972358,102.031219 C65.7643526,100.261011 69.201842,100.825629 70.9677994,103.297088"></path>
						<path ref={ e => this.orionStar4 = e } className="orion-star" d="M125.686515,177.923517 C127.941121,181.064158 127.220957,185.432412 124.080467,187.691219 C120.939977,189.939795 116.565796,189.219596 114.313236,186.078955 C112.05863,182.938313 112.778794,178.565967 115.923376,176.313299 C119.063866,174.058584 123.436001,174.778783 125.686515,177.923517"></path>
						<path ref={ e => this.orionStar5 = e } className="orion-star" d="M424.686515,17.9240925 C426.941121,21.0662883 426.220957,25.431813 423.080467,27.692312 C419.939977,29.9384911 415.565796,29.2204502 413.313236,26.0803001 C411.05863,22.9401499 411.778794,18.5664424 414.923376,16.3120805 C418.063866,14.0597643 422.438047,14.7778052 424.686515,17.9240925"></path>
						<path ref={ e => this.orionStar6 = e } className="orion-star" d="M455.968171,33.2966932 C457.739006,35.7637093 457.174188,39.1970404 454.705873,40.9709617 C452.237558,42.738856 448.804429,42.1723262 447.031584,39.70531 C445.260749,37.2382939 445.825567,33.8009448 448.297902,32.0310415 C450.764207,30.2611383 454.201356,30.8256591 455.968171,33.2966932"></path>
						<path ref={ e => this.orionStar7 = e } className="orion-star" d="M477.686504,67.9222407 C479.94113,71.0624655 479.220959,75.4321855 476.080441,77.6906925 C472.939923,79.9389708 468.565703,79.2209128 466.313123,76.080688 C464.058497,72.9384174 464.778668,68.5666516 467.925324,66.3122362 C471.065842,64.0598664 475.440062,64.7779243 477.686504,67.9222407"></path>
						<path ref={ e => this.orionStar8 = e } className="orion-star" d="M485.967233,95.2978621 C487.739218,97.7656516 487.174674,101.198049 484.705547,102.970517 C482.240438,104.738966 478.802947,104.172258 477.030962,101.706478 C475.260986,99.2366792 475.82553,95.8002623 478.298675,94.0298042 C480.763784,92.2613557 484.199266,92.8260535 485.967233,95.2978621"></path>
						<path ref={ e => this.orionStar9 = e } className="orion-star" d="M498.968483,156.296693 C500.738782,158.765718 500.174135,162.19704 497.706568,163.970962 C495.236991,165.738856 491.802893,165.172326 490.030584,162.70531 C488.260286,160.238294 488.826942,156.800945 491.298528,155.031042 C493.766096,153.261138 497.200194,153.825659 498.968483,156.296693"></path>
						<path ref={ e => this.orionStar10 = e } className="orion-star" d="M486.687429,181.923185 C488.939946,185.06347 488.221841,189.433274 485.081411,191.689779 C481.940981,193.940146 477.566884,193.220028 475.312322,190.079743 C473.059805,186.939458 473.77791,182.565563 476.922431,180.31315 C480.064907,178.058691 484.436958,178.778809 486.687429,181.923185"></path>
						<path ref={ e => this.orionStar11 = e } className="orion-star" d="M374.967069,381.299001 C376.739126,383.76446 376.174559,387.19641 373.707342,388.968647 C371.240124,390.738875 367.802495,390.174251 366.030438,387.704773 C364.260391,385.237305 364.826967,381.803345 367.298202,380.031108 C369.765419,378.260881 373.203049,378.825505 374.967069,381.299001"></path>
						<path ref={ e => this.orionStar12 = e } className="orion-star" d="M382.96859,395.298054 C384.738706,397.767603 384.174117,401.197645 381.706805,402.969933 C379.237483,404.738203 375.799721,404.173563 374.029605,401.708032 C372.261498,399.238482 372.826087,395.802412 375.297418,394.032133 C377.764731,392.259845 381.202493,392.826495 382.96859,395.298054"></path>
						<path ref={ e => this.orionStar13 = e } className="orion-star" d="M387.155955,407.880292 C388.604532,409.898053 388.14222,412.706893 386.124486,414.15549 C384.104698,415.604087 381.291788,415.143823 379.845266,413.121952 C378.394634,411.102135 378.856946,408.29535 380.880844,406.844699 C382.896523,405.394047 385.709433,405.85842 387.155955,407.880292"></path>
						<path ref={ e => this.orionStar14 = e } className="orion-star" d="M324.686323,342.922241 C326.941259,346.064511 326.220989,350.432186 323.08004,352.690693 C319.939091,354.938971 315.566317,354.220913 313.313428,351.080688 C311.058492,347.940463 311.778762,343.566652 314.923803,341.312236 C318.064753,339.059866 322.439573,339.777924 324.686323,342.922241"></path>
						<path ref={ e => this.orionStar15 = e } className="orion-star" d="M339.686515,319.924188 C341.941121,323.064441 341.220957,327.432154 338.080467,329.690681 C334.939977,331.938979 330.565796,331.220915 328.313236,328.080662 C326.05863,324.938364 326.778794,320.566559 329.923376,318.312123 C333.063866,316.059734 337.438047,316.777798 339.686515,319.924188"></path>
						<path ref={ e => this.orionStar16 = e } className="orion-star" d="M351.687417,293.923517 C353.939954,297.064158 353.221843,301.432412 350.081385,303.691219 C346.938882,305.939795 342.566792,305.219596 340.312209,302.078955 C338.059672,298.938313 338.777783,294.565967 341.924379,292.313299 C345.064837,290.058584 349.438972,290.778783 351.687417,293.923517"></path>
						<path ref={ e => this.orionStar17 = e } className="orion-star" d="M73.6874291,2.92409246 C75.9399459,6.06424262 75.2218411,10.431813 72.0814113,12.692312 C68.9389356,14.9384911 64.5668845,14.2204502 62.3123218,11.0803001 C60.0598051,7.93810421 60.7779099,3.56644239 63.9224314,1.31208052 C67.0628612,-0.940235651 71.4369583,-0.222194801 73.6874291,2.92409246"></path>
						<path ref={ e => this.orionStar18 = e } className="orion-star" d="M183.215555,203.96149 C186.279146,208.228654 185.298534,214.162858 181.037147,217.218826 C176.77247,220.276439 170.842726,219.30057 167.779134,215.035052 C164.722124,210.772825 165.702737,204.840266 169.967414,201.782653 C174.227155,198.723394 180.163481,199.699263 183.215555,203.96149"></path>
						<path ref={ e => this.orionStar19 = e } className="orion-star" d="M323.685146,160.918993 C325.942529,164.063219 325.219972,168.43579 322.080003,170.687556 C318.937609,172.940534 314.568324,172.221472 312.310941,169.078459 C310.058407,165.937871 310.780964,161.566512 313.923358,159.313534 C317.062114,157.059343 321.436249,157.778405 323.685146,160.918993"></path>
						<path ref={ e => this.orionStar20 = e } className="orion-star" d="M502.215598,399.960807 C505.279115,404.228005 504.298527,410.162256 500.037244,413.218248 C495.77267,416.275885 489.843071,415.301654 486.779554,411.036102 C483.722618,406.773841 484.701562,400.841235 488.96778,397.781952 C493.227418,394.724315 499.161953,395.698546 502.215598,399.960807"></path>
						<path ref={ e => this.orionStar21 = e } className="orion-star" d="M366.121683,495.169271 C369.346437,499.661058 368.314239,505.907638 363.828678,509.124472 C359.339653,512.343037 353.097969,511.317531 349.873215,506.827476 C346.655388,502.340886 347.685854,496.096037 352.176611,492.875739 C356.66044,489.657174 362.907319,490.68268 366.121683,495.169271"></path>
						<path ref={ e => this.orionStar22 = e } className="orion-star" d="M248.12198,116.171548 C251.345639,120.662431 250.315107,126.909393 245.829263,130.1249 C241.339089,133.342572 235.097444,132.318373 231.873785,127.825325 C228.654456,123.340938 229.687152,117.093977 234.175162,113.876304 C238.661006,110.656467 244.909145,111.682831 248.12198,116.171548"></path>
					</g>
				</svg>
			</OrionStyled>
		)
	}
}
