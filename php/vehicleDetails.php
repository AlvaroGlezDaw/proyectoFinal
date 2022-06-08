<?php
include 'conexion.php';

$vehicleSelected=[];
$idVehicle= json_decode(file_get_contents('php://input'));

$cars = $dbPruebas->cars;
$carSelected = $cars->findOne(['_id'=> new \MongoDB\BSON\ObjectId("$idVehicle")]);
if($carSelected!=null)
    array_push($vehicleSelected, $carSelected);

$bikes = $dbPruebas->bikes;
$bikeSelected = $bikes->findOne(['_id'=> new \MongoDB\BSON\ObjectId("$idVehicle")]);
if($bikeSelected!=null)
    array_push($vehicleSelected, $bikeSelected);

echo json_encode($vehicleSelected[0]);
?>