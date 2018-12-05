<?php

   // DB CONNECTION
   $conn = mysqli_connect('localhost', 'root', '', 'ajax_test');

   // GET
   if ( isset($_GET['name']) ) {
      echo 'GET: Your name is ' . $_GET['name'];
   }

   // POST
   if ( isset($_POST['name']) ) {
      $name = mysqli_real_escape_string($conn, $_POST['name']);

      $qry = "INSERT INTO users(name) VALUES('$name')";

      if (mysqli_query($conn, $qry)) {
         echo $name . " is added";
      }
      else {
         echo "ERROR: ". mysqli_error($conn);
      }
      // echo 'POST: Your name is ' . $_POST['name'];
   }