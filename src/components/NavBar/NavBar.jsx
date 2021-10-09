import React, { useContext } from 'react'
import { HiOutlineSearch, HiHome } from 'react-icons/hi'
import { MdOndemandVideo, MdArrowDropDown, MdNotifications, MdGroups, MdStorefront } from 'react-icons/md'
import { SiFacebookgaming } from 'react-icons/si'
import { CgMenuGridO } from 'react-icons/cg'
import { FaFacebookMessenger } from 'react-icons/fa'

import logo from '../../assets/images/fb-icon.png'
import './navbar.scss'
import { UserContext } from '../../context/userProvider'

const NavBar = () => {

  const { userInfo } = useContext(UserContext)
  console.log({ userInfo });
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="facebook logo" className="navbar__left-logo" width="40" />
        <div className="navbar__left-search">
          <HiOutlineSearch />
          <input type="text" placeholder="Tìm kiếm trên Facebook" />
        </div>
      </div>
      <div className="navbar__center">
        <div className="navbar__center-item active">
          <HiHome />
        </div>
        <div className="navbar__center-item">
          <MdOndemandVideo />
        </div>
        <div className="navbar__center-item">
          <MdStorefront />
        </div>
        <div className="navbar__center-item">
          <MdGroups />
        </div>
        <div className="navbar__center-item">
          <SiFacebookgaming />
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__right-user">
          <img src={userInfo?.photoURL} alt="" />
          <h5>{userInfo?.displayName}</h5>
        </div>
        <div className="navbar__right-item">
          <CgMenuGridO />
        </div>
        <div className="navbar__right-item">
          <FaFacebookMessenger />
        </div>
        <div className="navbar__right-item">
          <MdNotifications />
        </div>
        <div className="navbar__right-item">
          <MdArrowDropDown />
        </div>
      </div>
    </div>
  )
}

export default NavBar
