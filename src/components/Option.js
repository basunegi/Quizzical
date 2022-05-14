import React from 'react'

export default function Option(props) {
	var optionClass = ''

	if(props.isCorrect) {
		optionClass = 'option-held'
	} else if (props.isHeld && !props.isCorrect) {
		optionClass = 'option-wrong'
	} else {
		optionClass = 'option'
	}

	return (
		<div>
			{!props.isComplete && <div 
				className={`option${props.isHeld?'-held':''}`} 
				onClick={props.optionClicked}
			>
				{props.value}
			</div>}
			{props.isComplete && <div 
				className={optionClass} 
			>
				{props.value}
			</div>}
		</div>
	)
}
