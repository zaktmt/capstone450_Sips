<?php

//register account

if(isset($_POST['register'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    $result = mysqli_query($conn, $query);
    if($result){
        $_SESSION['username'] = $username;
        header('location: index.php');
    }else{
        array_push($errors, "Username or password incorrect");
    }
}

?>