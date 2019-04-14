import React from 'react'
import { hot } from 'react-hot-loader'
import Counter from './cont/Counter'

const App = () => (
  <div>
    <Counter />
  </div>
)

export default hot(module)(App)
