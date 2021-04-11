import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import "firebase/auth"
export const firebaseConfig = {
    apiKey: "AIzaSyBS1SewIGhzjwi0DCMJW36e9EZiLCUVk2M",
    authDomain: "contactsint.firebaseapp.com",
    projectId: "contactsint",
    storageBucket: "contactsint.appspot.com",
    messagingSenderId: "109035692512",
    appId: "1:109035692512:web:fff4ddd88c280e17a58b85",
    measurementId: "G-EYJH5PJT5E"
  };
 


//   const projectStorage = firebase.storage();
//   const projectFirestore = firebase.firestore();
//   const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
   const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  export default db; 
  export const auth = firebaseApp.auth()
  //export { projectStorage, projectFirestore, timestamp };

  // Initialize Firebase
  export const streamGroceryListItems = (groceryListId, observer) => {
    return db.collection('universities')
       
        .onSnapshot(observer);
};
export const streamUniListItems = (groceryListId, observer,country) => {
  return db.collection('universities').where("Country", "==", country)
     
      .onSnapshot(observer);
};