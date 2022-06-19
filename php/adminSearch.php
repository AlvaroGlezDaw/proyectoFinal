<?php
include 'conexion.php';
include 'vehicleSearchFunctions.php';

$criteriaVehicle=json_decode(file_get_contents('php://input'), true);

// Selecciona la colección pertinente
if($criteriaVehicle=="cars")
    $vehiclesSelected = $dbPruebas->cars;
else if($criteriaVehicle=="bikes")
    $vehiclesSelected = $dbPruebas->bikes;
else if($criteriaVehicle=="trucks")
    $vehiclesSelected = $dbPruebas->trucks;
else
    $vehiclesSelected = $dbPruebas->vans;

$allVehicles=searchAllVehicles($vehiclesSelected);

$vehicles=[];
foreach ($allVehicles as $vehicle)
{
array_push($vehicles,$vehicle);
}

echo json_encode($vehicles);  

?>