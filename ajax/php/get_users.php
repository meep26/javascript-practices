<?php

   // DB CONNECTION
   $conn = mysqli_connect('localhost', 'root', '', 'ajax_test');

   $qry = "SELECT * FROM users";

   $res = mysqli_query($conn, $qry);

   $users = mysqli_fetch_all($res, MYSQLI_ASSOC);

   echo json_encode($users);