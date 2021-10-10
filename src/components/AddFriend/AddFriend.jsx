import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

import './addFriend.scss'

const AddFriend = ({ name, imageUrl }) => {
  return (
    <div className="addFriend">
      <div className="addFriend__top">
        <div>
          <img src="https://www.facebook.com/rsrc.php/v3/yk/r/851ZgTnFYJI.png" alt="" />
          <h5>Lời mời kết bạn</h5>
        </div>
        <BsThreeDots />
      </div>
      <div className="addFriend__body">
        <img src={imageUrl} alt={name} />
        <div className="addFriend__body-content">
          <div className="addFriend__body-name">
            <h5>{name}</h5>
            <p>21 giờ</p>
          </div>
          <div className="addFriend__body-commonF">
            <img src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-1/cp0/p56x56/185496973_1412684542442264_6157209298806698520_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=6BAXNBaedyEAX9vaPUq&_nc_ht=scontent.fhan4-3.fna&oh=cfb738e4e04807352bfbbb384cb783e8&oe=618630AC" alt="" />
            <p>55 bạn chung</p>
          </div>
          <div className="addFriend__body-actions">
            <button className="btn-confirm">Xác nhận</button>
            <button className="btn-del">Xóa</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFriend
