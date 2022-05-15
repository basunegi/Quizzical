import React from 'react'
import Intropage from './components/Intropage'
import QuestionsPage from './components/QuestionsPage'

export default function App() {

	const [appState, setAppState] = React.useState({"isGameOn": false, "category": "select"})

	function handleStart(event, shouldStart) {
		const category = event.target.value
		setAppState(prevAppState => {
			return {
				"isGameOn": appState.category !== "select"? shouldStart: false,
				"category": event.type === "click" ? appState.category : category
			}
		})
	}
	
	return (
		<div>
			{!appState.isGameOn && <Intropage handleStart={handleStart}/>},
			{appState.isGameOn && <QuestionsPage category = {appState.category} handleStart={(event) => handleStart(event, false)}/>}
		</div>
	)
}
