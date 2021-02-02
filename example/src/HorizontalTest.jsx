import React from 'react'

import { SplitterGrid } from 'grid-splitter-react'
import 'grid-splitter-react/dist/index.css'


const First = () => (
    <div class="left" />
)

const Second = () => <div class="right" />

const App = () => {
  return (
    <div class="root">
        <SplitterGrid first={<First />} second={<Second />}/>
    </div>
  )}

export default App
