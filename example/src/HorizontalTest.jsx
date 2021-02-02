import React from 'react'

import { SplitterGrid } from 'grid-splitter-react'
import 'grid-splitter-react/dist/index.css'


const First = props => {
	const call = () => props.d2("Und zurück")
	return (
	  	<div className="left" >
			Das ist: {props.data} 
			<button onClick = {call}>Klick</button>
		</div>
	)
}

const Second = () => <div className="right" />

const App = () => {
  return (
    <div className="root">
        <SplitterGrid first={(data, d2) => <First data={data} d2={d2} />} second={data => <Second />}/>
    </div>
  )}

export default App
