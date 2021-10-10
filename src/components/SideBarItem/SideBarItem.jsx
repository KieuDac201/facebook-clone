import React from 'react'

import './sideBarItem.scss'

const SideBarItem = ({ imageUrl, title, radius, online }) => {
  return (
    <div className="sideBarItem">
      <div className="sideBarItem-img">
        <img src={imageUrl} alt={title} style={{ borderRadius: `${radius}px` }} />
        <div className={online ? 'online' : ''}></div>
      </div>
      <h5>{title}</h5>
    </div>
  )
}

export default SideBarItem
