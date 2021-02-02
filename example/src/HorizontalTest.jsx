import React from 'react'

import { SplitterGrid } from 'grid-splitter-react'
import 'grid-splitter-react/dist/index.css'


const First = () => (
    <div>
        Create React Library Example
    </div>
)

const Second = () => (
    <div>
        2
    </div>
)

const App = () => {
  return (
    <div class="root">
        <SplitterGrid first={<First />} second={<Second />}/>
    </div>
  )}

export default App
