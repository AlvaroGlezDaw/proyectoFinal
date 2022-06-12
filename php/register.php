<?php
include 'conexion.php';

// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$users = $dbPruebas->users;

$nombre = $_POST['userRegisterName'];
$password = $_POST['userRegisterPassword'];
$email = $_POST['userRegisterEmail'];
$direction = $_POST['userRegisterDirection'];

$user = array("nombre"=>$nombre, "email"=>$email, "password"=>$password, "direccion"=> $direction, "role"=>"user");

//Convert Row (Document) to json
$user=json_encode($user);

//Convert JSON to BSON
$bson = \MongoDB\BSON\fromJSON($user);

//Convert BSON to PHP Std Class object
$row = \MongoDB\BSON\toPHP($bson);


// Insert Record to Document
$users->insertOne($row);
?>