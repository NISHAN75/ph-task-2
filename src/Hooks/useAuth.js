import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const useAuth =()=>{

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs0EMYIBy1wuX5KtYt0_bhpA1gsAUO1Es",
  authDomain: "ph-task-ef3c2.firebaseapp.com",
  projectId: "ph-task-ef3c2",
  storageBucket: "ph-task-ef3c2.appspot.com",
  messagingSenderId: "1053227194594",
  appId: "1:1053227194594:web:e510970615d7577bdfe6bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
return[auth];
}

export default useAuth;