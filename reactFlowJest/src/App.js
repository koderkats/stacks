// @flow

// body prop on Item should be a number not a string
// Running 'yarn flow' should produce an error

import React from 'react'
import { hot } from 'react-hot-loader'
import Item from './comp/Item'

const App = () => (
  <Item title="Title" body="1234" />
)

export default hot(module)(App)
