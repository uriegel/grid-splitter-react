import React from 'react'

import { SplitterGrid } from 'grid-splitter-react'
import 'grid-splitter-react/dist/index.css'


const First = props => {
	const call = () => props.setSecondInvisible(!props.props.isVisible)
	return (
	  	<div className="left" >
			<div><button onClick = {call}>Klick</button></div>
		</div>
	)
}

const Second = () => <div className="right" />

const App = () => {
  return (
    <div className="root">
        <SplitterGrid first={(props, setSecondInvisible) => <First props={props} setSecondInvisible={setSecondInvisible} />} second={() => <Second />}/>
    </div>
  )}

export default App
