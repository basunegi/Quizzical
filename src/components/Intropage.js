import React from 'react'
import blobTop from './blobTop.svg'
import blobBottom from './blobBottom.svg'

export default function Intropage(props) {

	return (
		<main>
			<img src={blobTop} className = "blob-top" alt="blobTop"/>
			
			<div className="quizzical">
				<h1>Quizzical</h1>
				<h4>Created by Vijaypal Singh Negi</h4>

				<button className="start" onClick={event => props.handleStart(event, true)}>Start quiz</button>

				<select className="category" onChange={event => props.handleStart(event, false)}>
					<option value = "select">--Select category--</option>
					<option value="art">Art</option>
					<option value="geography">Geography</option>
					<option value="history">History</option>
					<option value="politics">Politics</option>
					<option value="sports">Sports</option>
				</select>

			</div>

			<img src={blobBottom} className = "blob-bottom" alt="blobBottom"/>

		</main>
	)
}
