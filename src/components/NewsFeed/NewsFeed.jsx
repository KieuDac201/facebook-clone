import React from 'react'
import { logOut } from "../../firebase/config";
import NewsFeedForm from '../NewsFeedForm/NewsFeedForm';

import './newsFeed.scss'

const NewsFeed = () => {
  return (
    <div className="news">
      <div className="news__content">
        <NewsFeedForm />
        <h1 onClick={logOut}>log out</h1>
      </div>
    </div>
  )
}

export default NewsFeed
