<?php
include 'conexion.php';
include 'vehicleSearchFunctions.php';

$criteriaVehicle=json_decode(file_get_contents('php://input'), true);

// Selecciona la colección pertinente
if($criteriaVehicle[1]=="cars")
    $vehiclesSelected = $dbPruebas->cars;
else if($criteriaVehicle[1]=="bikes")
    $vehiclesSelected = $dbPruebas->bikes;
else if($criteriaVehicle[1]=="trucks")
    $vehiclesSelected = $dbPruebas->trucks;
else
    $vehiclesSelected = $dbPruebas->vans;

deleteVehicleById($criteriaVehicle[0], $vehiclesSelected);

?>