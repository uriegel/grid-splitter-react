import React, { useState } from 'react'

import { SplitterGrid } from 'grid-splitter-react'
import 'grid-splitter-react/dist/index.css'

const First = props => {
	const call = () => {
		props.test()
	}
	return (
	  	<div className="left" >
			<div><button onClick = {call}>Klick</button></div>
		</div>
	)
}

const Second = () => <div className="right" />

const App = () => {
	const [isRightVisible, setRightVisible] = useState(true)
	const test = () => console.log("Test")
	const toggleRight = () => setRightVisible(!isRightVisible)
	const positionChanged = () => console.log("positionChanged")
  	return (
    	<div className="root">
			<div>{isRightVisible}<button onClick={toggleRight}>Rechte Ansicht umschalten</button> </div>
			<SplitterGrid 
				first={<First test={test} />} 
				second={<Second />} 
				isSecondVisible={isRightVisible} 
				positionChanged={positionChanged} />
    	</div>
)}

export default App
