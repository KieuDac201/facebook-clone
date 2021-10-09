import React from 'react'
import { logOut } from "../../firebase/config";

import './newsFeed.scss'

const NewsFeed = () => {
  return (
    <div className="news">
      <div className="news__content">
        <h1>
          NewsFeed
        </h1>
        <h1 onClick={logOut}>log out</h1>
      </div>
    </div>
  )
}

export default NewsFeed
