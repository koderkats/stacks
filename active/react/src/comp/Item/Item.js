// @flow

import React from 'react'
import s from './Item.css'

type Pops = {
  title: string,
  body: number,
}

const Item = (props: Props) => {

  return (
    <div className={s.comp} >
      <span>{props.title}</span>
      <span className={s.message}>{'test-message'}</span>
      <span>{props.body}</span>
      <span className={s.end}>hello</span>
    </div>
  )

}

export default Item
