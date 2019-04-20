// @flow

// body prop on Item should be a number not a string
// Running 'yarn flow' should produce an error

import React from 'react'
import { hot } from 'react-hot-loader'
import Elem from './comp/Elem/Elem'
import Item from './comp/Item/Item'

const App = () => (
  <>
    <Elem title="Elem" body={4321} />
    <Item title="Item" body={1234} />
  </>
)

export default hot(module)(App)
