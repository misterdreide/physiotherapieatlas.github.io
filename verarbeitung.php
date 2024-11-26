<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);

    if (!empty($name) && !empty($email)) {
        echo "<h3>Vielen Dank für deine Nachricht, $name!</h3>";
        echo "<p>Wir werden uns an $email melden.</p>";
    } else {
        echo "<p>Bitte fülle alle Felder aus.</p>";
    }
} else {
    echo "<p>Ungültige Anforderung.</p>";
}
?>
