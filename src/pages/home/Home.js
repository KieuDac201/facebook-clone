import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userProvider";
import { logOut } from "../../firebase/config";

import "./home.scss";

const Home = () => {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo);
  return (
    <>
      <h1>Home</h1>
      <button onClick={logOut}>sign out</button>
    </>
  );
};

export default Home;
