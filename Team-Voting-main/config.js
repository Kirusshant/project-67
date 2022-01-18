import firebase from 'firebase';

// add SDK Firebase

        
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCDP_5Da97noz2rForZuvCIKH44O_BsVsc",
      authDomain: "pro-67-cad0f.firebaseapp.com",
      projectId: "pro-67-cad0f",
      storageBucket: "pro-67-cad0f.appspot.com",
      messagingSenderId: "204433221775",
      appId: "1:204433221775:web:92b5c4af8ea32c19d0a8fa"
    };
    
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();