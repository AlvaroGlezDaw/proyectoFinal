<?php
include 'conexion.php';
include 'vehicleSearchFunctions.php';

// Selecciona la colección llamada "vans" de la base de datos "pruebas"
$vans = $dbPruebas->vans;

$criteriaVan=json_decode(file_get_contents('php://input'), true);
if($criteriaVan!=null && $criteriaVan!=""){
    $allvans=searchVehicleByCriteria($criteriaVan, $vans);

    $furgonetas=[];
    foreach ($allvans as $van)
    {
        array_push($furgonetas,$van);
    }

     echo json_encode($furgonetas);  
}
?>