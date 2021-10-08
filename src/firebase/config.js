import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { showToast } from "../utils/ultis";

const firebaseConfig = {
  apiKey: "AIzaSyABHvLMZHoqr66izDpRGHwx-1MaEHw6CAM",
  authDomain: "facebook-clone-1c7ba.firebaseapp.com",
  projectId: "facebook-clone-1c7ba",
  storageBucket: "facebook-clone-1c7ba.appspot.com",
  messagingSenderId: "93455525854",
  appId: "1:93455525854:web:c7a827bd83f6ad14c75f4f",
};

initializeApp(firebaseConfig);
const auth = getAuth();

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    showToast("default", "👏🏻 Đăng ký thành công");
    return userCredential.user;
  } catch (error) {
    return error;
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    showToast("default", "👏🏻 Đăng ký thành công");
    return userCredential.user;
  } catch (error) {
    return error;
  }
};

export const logOut = async () => {
  signOut(auth)
    .then(() => {
      showToast("default", "👏🏻 Đăng xuất thành công");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateUserProfile = (userName) => {
  updateProfile(auth.currentUser, {
    displayName: userName,
    photoURL:
      "https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
  })
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};
