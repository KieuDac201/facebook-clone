import React, { useContext, useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { v4 as uuidv4 } from 'uuid';

import SideBarItem from '../SideBarItem/SideBarItem'
import './sidebarLeft.scss'
import { dataGroup, dataMenu } from './data'
import { UserContext } from '../../context/userProvider';

const SideBarLeft = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const { userInfo } = useContext(UserContext)
  let dataMenuHandle = []

  const handleMenuData = () => {
    if (showMoreMenu) {
      dataMenuHandle = dataMenu
    } else {
      dataMenuHandle = dataMenu.slice(0, 5)
    }
  }

  const toggleShowMoreMenu = () => {
    setShowMoreMenu(!showMoreMenu)
  }

  handleMenuData()
  return (
    <div className="sideBarLeft">
      <div className="sideBar__content">
        <div className="sideBar__list">
          <div className="sideBar__user">
            <img src={userInfo?.photoURL} alt="picture profile" />
            <h5>{userInfo?.displayName}</h5>
          </div>
          {
            dataMenuHandle.map(({ imageUrl, title }) => (

              <SideBarItem imageUrl={imageUrl} title={title} radius={0} key={uuidv4()} />
            ))
          }
          <div className="sideBar__btn" onClick={toggleShowMoreMenu}>
            <div className="sideBar__btn-icon">
              {
                showMoreMenu ? <BiChevronUp /> : <BiChevronDown />
              }

            </div>
            <h5>{showMoreMenu ? 'Ẩn bớt' : 'Xem thêm'}</h5>
          </div>
        </div>
        <div className="sideBar__list">
          <div className="sideBar__list-title">Lối tắt của bạn</div>
          {
            dataGroup.map(({ imageUrl, title }) => (

              <SideBarItem imageUrl={imageUrl} title={title} radius={5} key={uuidv4()} />
            ))
          }
          <div className="sideBar__btn">
            <div className="sideBar__btn-icon">
              <BiChevronDown />
            </div>
            <h5>Xem thêm</h5>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SideBarLeft
