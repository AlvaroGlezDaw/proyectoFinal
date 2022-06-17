<?php
include 'conexion.php';

// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$cars = $dbPruebas->cars;
$bikes = $dbPruebas->bikes;
$trucks = $dbPruebas->trucks;
$vans = $dbPruebas->vans;

$vehicles=[];
array_push($vehicles,$cars,$bikes,$trucks,$vans);

$idVehicle=$_POST['idVehicle'];

foreach ($vehicles as $vehicle)
{
    $vehicle->deleteOne(['_id'=> new \MongoDB\BSON\ObjectId("$idVehicle")]);
}

header("Location: ../index.html");
?>