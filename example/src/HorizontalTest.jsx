import React, { useState } from 'react'

import { SplitterGrid } from 'grid-splitter-react'
import 'grid-splitter-react/dist/index.css'

const First = props => {
	const call = () => {
		props.test()
		props.setSecondVisible(!props.isSecondVisible)
	}
	return (
	  	<div className="left" >
			<div><button onClick = {call}>Klick</button></div>
		</div>
	)
}

const Second = () => <div className="right" />

const App = () => {
	const [greeting, setGreeting] = useState('Hello Function Component!')
	const test = () => console.log("Test")
	const callTest = () => setGreeting("Das ist geändert!")
  	return (
    	<div className="root">
			<div>{greeting}<button onClick={callTest}>Klick</button> </div>
        	<SplitterGrid first={(isSecondVisible, setSecondVisible, greeting) => <First isSecondVisible={isSecondVisible} setSecondVisible={setSecondVisible} test={test} />} second={() => <Second />}/>
    	</div>
)}

// TODO: SetSecondVisible: from firstSplitter to App, button on top of Splittergrid:
// TODO: Initial second invisible
// TODO: Button in first view to control second visiblility: <First setRightVisible={setRightVisible} props={props} setSecondInvisible={setSecondInvisible} />

export default App
