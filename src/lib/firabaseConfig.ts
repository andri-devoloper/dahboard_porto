import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0ir-CD45eARNAZarRPaK3kotZhq4xCYQ",
  authDomain: "store-img-50605.firebaseapp.com",
  projectId: "store-img-50605",
  storageBucket: "store-img-50605.appspot.com",
  messagingSenderId: "384544385785",
  appId: "1:384544385785:web:aa635cc9e90ece1934d028",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
