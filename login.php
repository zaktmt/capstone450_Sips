<?php

//login
session_start();
if(isset($_POST['login'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $query);
    if(mysqli_num_rows($result) == 1){
        $_SESSION['username'] = $username;
        header('location: index.php');
    }else{
        array_push($errors, "Username or password incorrect");
    }
}

//logout
if(isset($_GET['logout'])){
    session_destroy();
    unset($_SESSION['username']);
    header('location: login.php');
}



?>
