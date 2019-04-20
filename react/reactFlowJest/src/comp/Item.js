// @flow

import React from 'react'

type Props = {
  title: string,
  body: number,
}

const Item = (props: Props) => (
  <div>
    <span>{props.title}</span> <span>{props.body}</span>
  </div>
)

export default Item