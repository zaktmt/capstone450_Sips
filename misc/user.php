<!DOCTYPE html>
<html>
<head>
    <title>User Response</title>
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_message = $_POST["user_message"];
    echo "<strong>You:</strong> " . $user_message;
}
?>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <label for="user_message">Your Message:</label><br>
    <input type="text" id="user_message" name="user_message"><br><br>
    <input type="submit" value="Send">
</form>

</body>
</html>
