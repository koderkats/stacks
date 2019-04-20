// @flow

import React from 'react'
import style from './Item.css'

type Pops = {
  title: string,
  body: number,
}

const Item = (props: Props) => (
  <div className={'Item '} >
    <span>{props.title}</span> <span className="message">{'test-message'}</span> <span>{props.body}</span> <span className="end">hello</span>
  </div>
)

export default Item
