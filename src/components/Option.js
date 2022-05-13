import React from 'react'

export default function Option(props) {
	return (
		<div 
			className={`option${props.isHeld?'-held':''}`} 
			onClick={props.optionClicked}
		>
			{props.value}
		</div>
	)
}
