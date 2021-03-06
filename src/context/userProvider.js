import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        setUserInfo({
          displayName,
          email,
          photoURL,
          uid,
        });
        setTimeout(() => {
          history.push("/");
        }, 100);
      } else {
        setTimeout(() => {
          history.push("/auth");
        }, 100);
      }
    });
  }, [history]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
