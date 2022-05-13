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

				<button className="start" onClick={props.handleStart}>Start quiz</button>
			</div>

			<img src={blobBottom} className = "blob-bottom" alt="blobBottom"/>

		</main>
	)
}
