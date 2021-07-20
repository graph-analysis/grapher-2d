import React from 'react'
import Graphin from '@antv/graphin'
import {
  MiniMap,
  Toolbar,
  ContextMenu,
  FishEye,
} from '@antv/graphin-components'
import { ZoomOutOutlined, ZoomInOutlined } from '@ant-design/icons'
import styles from './index.css'
import { useState } from 'react'
const { Menu } = ContextMenu


const defaultLayout = {
  type: 'graphin-force',
  preset: {
    type: 'concentric',
  },
  animation: true,
}

// 这里是导出的页面父组件
export default (props) => {
  const { data } = props

  const [visible, setVisible] = useState(false)
  const menuClick = () => {
    setVisible(!visible)
  }

  const options = [
    {
      key: 'zoomOut',
      name: (
        <span>
          放大 <ZoomInOutlined />
        </span>
      ),
      icon: <ZoomInOutlined />,
    },
    {
      key: 'zoomIn',
      name: <ZoomOutOutlined />,
    },
  ]

  const toolbarClick = (
    context,
    option
  ) => {
    const { apis } = context
    const { handleZoomIn, handleZoomOut } = apis
    if (option.key === 'zoomIn') {
      handleZoomIn()
    } else if (option.key === 'zoomOut') {
      handleZoomOut()
    }
  }

  return (
      <Graphin data={data} layout={defaultLayout} fitView={true}>
        {/* 小地图 */}
        <div className={"map"}>
          <MiniMap visible={true} />
        </div>

        {/* 工具栏 */}
        <div className={"toolbar"}>
          <Toolbar options={options} onChange={toolbarClick} />
        </div>

        {/* 右键菜单 */}
        <ContextMenu bindType="canvas">
          <Menu bindType="canvas">
            <Menu.Item onClick={menuClick}>开启放大镜</Menu.Item>
          </Menu>
        </ContextMenu>

        {/* 放大镜 */}
        <FishEye options={{}} visible={visible} handleEscListener={menuClick} />
      </Graphin>
  )
}
