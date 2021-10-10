import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import AddFriend from '../AddFriend/AddFriend'
import './sidebarRight.scss'
import SideBarItem from '../SideBarItem/SideBarItem'
import { dataFriend } from './data'

const SideBarRight = () => {

  return (
    <div className="sideBarRight">
      <div className="sideBar__content">
        <AddFriend name="Tra ML" imageUrl="https://scontent.xx.fbcdn.net/v/t1.6435-1/p100x100/244762475_294248755710767_4328671146854686117_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=FC70Os4nA7AAX_BRqYS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=e1530fdec3354063a4ce2837e7de8393&oe=618639A7" />
        <div className="sideBar__list">
          <div className="sideBar__list-title">Người liên hệ</div>
          {
            dataFriend.map(({ imageUrl, title }) => (
              <SideBarItem imageUrl={imageUrl} title={title} radius={999} key={uuidv4()} online />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default SideBarRight
