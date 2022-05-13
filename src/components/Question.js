import React from 'react'
import Option from './Option.js'
import {nanoid} from 'nanoid'

export default function Question(props) {

	const shuffledOptions = shuffleArray([
		props.question.correct_answer,
		...props.question.incorrect_answers
	])

	const [options, setOptions] = React.useState(shuffledOptions.map(option => {
		return createOption(option)
	}))

	function createOption(value) {
		return {
			"value": value,
			"id": nanoid(),
			"isHeld": false
		}
	}

	const optionElements = options.map(option => {
		return <Option 
					key={nanoid()} 
					value={option.value} 
					isHeld={option.isHeld}
					optionClicked={() => optionClicked(option.id)}
				/>
	})

	function shuffleArray(arr) {
	    for (let i = 3; i > 0; i--) {
	        const j = Math.floor(i * Math.random())
	        let temp = arr[i]
	        arr[i] = arr[j]
	        arr[j] = temp
	    }
	   	return arr
	} 

	function optionClicked(id) {
		setOptions(prevOptions => prevOptions.map(prevOption => {
			return {
				...prevOption,
				"isHeld": !prevOption.isHeld && id === prevOption.id ? true : false
			}
		}))

		props.handleChange(props.question.id)
	}
	
	return (
		<div className="question">
			<p>{props.question.question}</p>
			<div className="options">
				{optionElements}
			</div>
		</div>
	)
}
