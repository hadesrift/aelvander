<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $box1 = $_POST["box1"];
    $box2 = $_POST["box2"];

    $file = fopen("codes.txt", "a");
    fwrite($file, "Box1: $box1, Box2: $box2\n");
    fclose($file);
    
    echo "Code saved successfully!";
}
?>
