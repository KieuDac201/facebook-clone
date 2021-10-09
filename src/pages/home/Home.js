import React from "react";
import { useContext } from "react";

import SideBarLeft from "../../components/SideBarLeft/SideBarLeft";
import SideBarRight from "../../components/SideBarRight/SideBarRight";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import NavBar from "../../components/NavBar/NavBar";
import { UserContext } from "../../context/userProvider";

import "./home.scss";

const Home = () => {
  const { userInfo } = useContext(UserContext);
  return (
    <>
      <NavBar />
      <div className="home">
        <SideBarLeft />
        <NewsFeed />
        <SideBarRight />
      </div>
      {/* <button onClick={logOut}>sign out</button> */}
    </>
  );
};

export default Home;
