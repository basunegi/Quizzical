import React from 'react'
import Question from './Question'
import blobTop from './blobTop.svg'
import blobBottom from './blobBottom.svg'
import {nanoid} from 'nanoid'
 
export default function QuestionsPage(props) {

	const [questions, setQuestions] = React.useState([])
	const [isComplete, setIsComplete] = React.useState(false)

	React.useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple")
		.then(res => res.json())
		.then(data => setQuestions(data.results.map(item => {
			return {
				...item,
				"id": nanoid(),
				"isAttempted":false
			}
		})))
	 }, [])

	const questionElements = questions.map(question => {
		return <Question 
			key={question.id} 
			question={question} 
			handleChange={handleChange}
		/>
	})

	function handleSubmit() {
		setIsComplete(questions.every(question => question.isAttempted))
	}

	function handleChange(id) {
		setQuestions(prevQuestions => prevQuestions.map(prevQuestion => {
			return {
				...prevQuestion,
				"isAttempted": id === prevQuestion.id ? 
					!prevQuestion.isAttempted : 
					prevQuestion.isAttempted
			} 
		}))
	}

	return (
		<main>
			<img src={blobTop} className = "blob-top-questions" alt="blobTop"/>

			<div className="question-list">
				{questionElements}

				{!isComplete && <button 
					className="check-answers"
					onClick={handleSubmit}
				>
					Check Answers
				</button>}

				{isComplete && <button 
					className="check-answers"
					onClick={props.handleStart}
				>
					Play Again
				</button>}

			</div>

			<img src={blobBottom} className = "blob-bottom-questions" alt="blobBottom"/>

		</main>
	)
}
