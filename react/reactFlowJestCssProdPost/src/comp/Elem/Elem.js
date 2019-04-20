// @flow

import React from 'react'
import styles from './Elem.css'

type Pops = {
  title: string,
  body: number,
}

const Elem = (props: Props) => (
  <div className={'Elem '} >
    <span>{props.title}</span> <span className="message">{'test-message'}</span> <span>{props.body}</span> <span className="end">hello</span>
  </div>
)

export default Elem
