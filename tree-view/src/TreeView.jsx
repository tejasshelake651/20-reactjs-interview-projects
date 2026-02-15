import React from 'react'
import MenuList from './MenuList'
import './style.css'
function TreeView({ menus = [] }) {

  return (
    <div
      className='tree-view-container'
    >
     
      <MenuList list={menus} />
    </div>
  )
}

export default TreeView