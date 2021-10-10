import React, { useContext } from 'react'
import { UserContext } from '../../context/userProvider'

import './newsFeedForm.scss'

const NewsFeedForm = () => {
  const { userInfo } = useContext(UserContext)

  return (
    <div className="newsForm">
      <div className="newsForm__top">
        <img src={userInfo?.photoURL} alt="picture profile" />
        <input type="text" placeholder="Kieu ơi bạn đang nghĩ gì thế?" />
      </div>
      <div className="newsForm__bottom">
        <div className="newsForm__bottom-item ">
          <i className="one"></i>
          <h5>Video trực tiếp</h5>
        </div>
        <div className="newsForm__bottom-item ">
          <i className="two"></i>
          <h5>Ảnh/video</h5>
        </div>
        <div className="newsForm__bottom-item ">
          <i className="three"></i>
          <h5>Cảm xúc/Hoạt động</h5>
        </div>
      </div>
    </div>
  )
}

export default NewsFeedForm
