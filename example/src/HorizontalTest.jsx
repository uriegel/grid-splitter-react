import React from 'react'

import { SplitterGrid } from 'grid-splitter-react'
import 'grid-splitter-react/dist/index.css'


const First = props => {
	const call = () => {
		console.log("props.isVisible", props, props.props.isVisible)
		props.d2(!props.props.isVisible)
	}
	return (
	  	<div className="left" >
			<p>Das ist: {props.data}</p>
			<p><button onClick = {call}>Klick</button></p>
		</div>
	)
}

const Second = () => <div className="right" />

const App = () => {
  return (
    <div className="root">
        <SplitterGrid first={(data, props, d2) => <First data={data} props={props} d2={d2} />} second={data => <Second />}/>
    </div>
  )}

export default App
