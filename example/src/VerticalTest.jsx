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
	const [isBottomVisible, setBottomVisible] = useState(true)
	const test = () => console.log("Test")
	const toggleRight = () => setBottomVisible(!isBottomVisible)
  	return (
    	<div className="root">
			<div>{isBottomVisible}<button onClick={toggleRight}>Untere Ansicht umschalten</button> </div>
        	<SplitterGrid isVertical={true} first={() => <First test={test} />} second={() => <Second />} isSecondVisible={isBottomVisible} />
    	</div>
)}

export default App
