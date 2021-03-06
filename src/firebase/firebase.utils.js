import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyCbg0LBRFJ8Jsxfkk-WBRuy326Qo1piC4Y",
    authDomain: "agora3d-dec6f.firebaseapp.com",
    databaseURL: "https://agora3d-dec6f.firebaseio.com",
    projectId: "agora3d-dec6f",
    storageBucket: "agora3d-dec6f.appspot.com",
    messagingSenderId: "305873992072",
    appId: "1:305873992072:web:338e93afcc440d02d4a23d",
    measurementId: "G-S2YK4DCE3F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //Google provider 

  const provider = new firebase.auth.GoogleAuthProvider();
  //always google pop uP!!
  provider.setCustomParameters({prompt : 'select account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  //Necesita si o si trabajar con async y await...  
  export const getTeam = async ()=>{
    const toR = [];
    let teamsRef = await firestore.collection('team');
    await teamsRef.get()
    .then(snapshot => 
      snapshot.forEach(doc => {
        const {apellido,nombre,img,bio,rol} = doc.data();
        toR.push({'apellido':apellido,'nombre':nombre,'img':img,'bio':bio,'rol':rol})
      })
    )
    .catch(err => {
      console.log('Error getting documents', err);
    });
    console.log("Estoy retornando : ",toR);

    return toR; 
  }

  export default firebase;