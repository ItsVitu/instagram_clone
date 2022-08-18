import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*<html>

    <head>

        <title>Sistema de Upload com Firebase</title>

    </head>

    <body>



    <form method="post">

        <input type="file" name="arquivo" />

        <progress value="0"></progress>

    </form>



    <!-- The core Firebase JS SDK is always required and must be listed first -->

<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js"></script>



<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-storage.js"></script>



<script>

  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {

   

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

</script>

    <script>

        

        //Upload de arquivos.



        const storage = firebase.storage();



        const input = document.querySelector('input[type=file]');



        input.addEventListener('change',(e)=>{

            let file = e.target.files[0];



            const uploadTask = storage.ref(`images/${e.target.files[0].name}`)

            .put(e.target.files[0]);



            uploadTask.on("state_changed",function(snapshot){



                let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 1;



                document.querySelector('progress').value = progress;



            },function(error){},function(){

                console.log('upload realizado com sucesso');

            })



        });





    </script>





    </body>

</html><html>

    <head>

        <title>Sistema de Upload com Firebase</title>

    </head>

    <body>



    <form method="post">

        <input type="file" name="arquivo" />

        <progress value="0"></progress>

    </form>



    <!-- The core Firebase JS SDK is always required and must be listed first -->

<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js"></script>



<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-storage.js"></script>



<script>

  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {

   

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

</script>

    <script>

        

        //Upload de arquivos.



        const storage = firebase.storage();



        const input = document.querySelector('input[type=file]');



        input.addEventListener('change',(e)=>{

            let file = e.target.files[0];



            const uploadTask = storage.ref(`images/${e.target.files[0].name}`)

            .put(e.target.files[0]);



            uploadTask.on("state_changed",function(snapshot){



                let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 1;



                document.querySelector('progress').value = progress;



            },function(error){},function(){

                console.log('upload realizado com sucesso');

            })



        });





    </script>





    </body>

</html><html>

    <head>

        <title>Sistema de Upload com Firebase</title>

    </head>

    <body>



    <form method="post">

        <input type="file" name="arquivo" />

        <progress value="0"></progress>

    </form>



    <!-- The core Firebase JS SDK is always required and must be listed first -->

<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js"></script>



<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-storage.js"></script>



<script>

  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {

   

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

</script>

    <script>

        

        //Upload de arquivos.



        const storage = firebase.storage();



        const input = document.querySelector('input[type=file]');



        input.addEventListener('change',(e)=>{

            let file = e.target.files[0];



            const uploadTask = storage.ref(`images/${e.target.files[0].name}`)

            .put(e.target.files[0]);



            uploadTask.on("state_changed",function(snapshot){



                let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 1;



                document.querySelector('progress').value = progress;



            },function(error){},function(){

                console.log('upload realizado com sucesso');

            })



        });





    </script>





    </body>

</html>*/