import React from 'react'
import Intropage from './components/Intropage'
import QuestionsPage from './components/QuestionsPage'

export default function App() {

	const [isGameOn, setIsGameOn] = React.useState(false)

	function handleStart(shouldStart) {
		setIsGameOn(shouldStart)
	}
	
	return (
		<div>
			{!isGameOn && <Intropage handleStart={() => handleStart(true)}/>},
			{isGameOn && <QuestionsPage handleStart={() => handleStart(false)}/>}
		</div>
	)
}
