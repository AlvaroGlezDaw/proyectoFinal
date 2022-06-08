<?php
include 'conexion.php';

// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$vehicles = $dbPruebas->cars;

$idVehicle=$_POST['idCar'];

$vehicles->deleteOne(['_id'=> new \MongoDB\BSON\ObjectId("$idVehicle")]);
?>