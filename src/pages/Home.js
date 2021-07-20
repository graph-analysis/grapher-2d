import React from 'react'
import { Grapher } from '../components'


const data = {
  nodes: [
    {
      id: 'node-0',
      style: {
        label: { value: '初始化节点' },
      },
    },
  ],
  edges: [],
}


export default function () {
  return (
    <Grapher data={data} />
  )
}
