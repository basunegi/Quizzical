import React from 'react'
import Intropage from './components/Intropage'
import QuestionsPage from './components/QuestionsPage'

export default function App() {

	const [appState, setAppState] = React.useState({"isGameOn": false, "category": "select"})

	function handleStart(event, shouldStart, shouldReset) {
		const category = event.target.value
		setAppState(prevAppState => {
			return {
				"isGameOn": shouldReset ? false : (appState.category !== "select"? shouldStart: false),
				"category": shouldReset ? "select" : (event.type === "click" ? appState.category : category)
			}
		})
	}
	
	return (
		<div>
			{!appState.isGameOn && <Intropage handleStart={handleStart}/>},
			{appState.isGameOn && <QuestionsPage category = {appState.category} handleStart={(event) => handleStart(event, false, true)}/>}
		</div>
	)
}
