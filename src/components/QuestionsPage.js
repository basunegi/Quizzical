import React from 'react'
import Question from './Question'
import blobTop from './blobTop.svg'
import blobBottom from './blobBottom.svg'
import {nanoid} from 'nanoid'
 
export default function QuestionsPage(props) {

	const [questions, setQuestions] = React.useState([])
	const [isComplete, setIsComplete] = React.useState(false)
	const url = {
		"art": "https://opentdb.com/api.php?amount=7&category=25&difficulty=easy&type=multiple",
		"politics": "https://opentdb.com/api.php?amount=7&category=24&difficulty=easy&type=multiple",
		"geography": "https://opentdb.com/api.php?amount=7&category=22&difficulty=easy&type=multiple",
		"history": "https://opentdb.com/api.php?amount=7&category=23&difficulty=easy&type=multiple",
		"sports": "https://opentdb.com/api.php?amount=7&category=21&difficulty=easy&type=multiple"
	}

	React.useEffect(() => {
		fetch(url[props.category])
		.then(res => res.json())
		.then(data => {
			if(data.results){	
				setQuestions(data.results.map(item => {
					return {
						...item,
						"qid": nanoid(),
						"isAttempted": false,
						"isCorrect": false
					}
				}))
			}else{
				console.log(">>>>>>>>>>>")
			}
		})
	 }, [])

	const questionElements = questions.map(question => {
		return <Question 
			key={question.qid} 
			question={question} 
			handleChange={handleChange}
			isComplete={isComplete}
		/>
	})

	function handleSubmit() {
		setIsComplete(questions.every(question => question.isAttempted))
	}

	function handleChange(qid, isAttempted, isCorrectAttempt) {
		setQuestions(prevQuestions => prevQuestions.map(prevQuestion => {
			return {
				...prevQuestion,
				"isAttempted": qid === prevQuestion.qid? isAttempted: prevQuestion.isAttempted,
				"isCorrect": qid === prevQuestion.qid? isCorrectAttempt: prevQuestion.isCorrect,
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

				{isComplete && <div className="footer">
					<div className="result">
						You scored {
							questions.filter(question => question.isCorrect).length
						}/{
							questions.length
						} correct answers!
					</div>

					<button 
						className="play-again"
						onClick={props.handleStart}
					>
						Play Again
					</button>
				</div>}

			</div>

			<img src={blobBottom} className = "blob-bottom-questions" alt="blobBottom"/>

		</main>
	)
}
