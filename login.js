 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
 import {  getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/ firebasejs/10.7.2/firebase-auth.js";
 auth = getAuth(app);

  const firebaseConfig = {
    apiKey: "AIzaSyCePIMJSoURJJ6QMica7y63qU_UvNOIMlw",
    authDomain: "login-76b7c.firebaseapp.com",
    projectId: "login-76b7c",
    storageBucket: "login-76b7c.firebasestorage.app",
    messagingSenderId: "505348176693",
    appId: "1:505348176693:web:bd6b23961880bfb2f82a7c",
    measurementId: "G-78Q8W9B77J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
 

  //sumit button
   const submit = document.getElementById('submit');
   submit.addEventListener("click", function (event) {
    event.preventDefault() 

     //imputs
  const email  = document.getElementById('email').value;
  const password = document.getElementById('password').value; 


   signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("creating Account...")
    window.location.href = "grand.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
   })