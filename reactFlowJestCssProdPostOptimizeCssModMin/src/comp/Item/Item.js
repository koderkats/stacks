// @flow

import React from 'react'
import s from './Item.css'

type Pops = {
  title: string,
  body: number,
}


// const Item = (props: Props) => (
//   <div className={s.comp + ' bob'} >
//     <span>{props.title}</span> <span className={s.message}>{'test-message'}</span> <span>{props.body}</span> <span className={s.end}>hello</span>
//   </div>
// )


const Item = (props: Props) => {

console.log(s)

  return (
    <div className={s.comp + ' bob'} >
      <span>{props.title}</span>
      <span className={s.message}>{'test-message'}</span>
      <span>{props.body}</span>
      <span className={s.end}>hello</span>
    </div>
  )

}


export default Item
