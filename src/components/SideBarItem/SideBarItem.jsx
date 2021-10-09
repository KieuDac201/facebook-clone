import React from 'react'

import './sideBarItem.scss'

const SideBarItem = ({ imageUrl, title, radius }) => {
  return (
    <div className="sideBarItem">
      <img src={imageUrl} alt={title} style={{ borderRadius: `${radius}px` }} />
      <h5>{title}</h5>
    </div>
  )
}

export default SideBarItem
