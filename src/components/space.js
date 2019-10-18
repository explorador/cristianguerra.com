import React from 'react'
import { rem } from 'polished'

const Space = ({ height = 50 }) => {
	return (
		<div aria-hidden="true" style={{ height: `${rem( Number( height ) )}` }}></div>
	);
}

export default Space;
