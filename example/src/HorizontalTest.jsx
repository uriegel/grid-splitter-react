import React from 'react'

import { SplitterGrid } from 'grid-splitter-react'
import 'grid-splitter-react/dist/index.css'

const First = props => {
	const call = () => {
		props.test()
		props.setSecondInvisible(!props.props.isVisible)
	}
	return (
	  	<div className="left" >
			<div><button onClick = {call}>Klick</button></div>
		</div>
	)
}

const Second = () => <div className="right" />

const App = () => {
	const test = () => console.log("Test")
  	return (
    	<div className="root">
        	<SplitterGrid first={(props, setSecondInvisible) => <First props={props} setSecondInvisible={setSecondInvisible} test={test}/>} second={() => <Second />}/>
    	</div>
)}

// TODO: SetSecondVisible: from firstSplitter to App, button on top of Splittergrid:
			// Call child from Parent
// TODO: Initial second invisible
// TODO: Button in first view to control second visiblility: <First setRightVisible={setRightVisible} props={props} setSecondInvisible={setSecondInvisible} />

export default App
