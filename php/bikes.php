<?php
include 'conexion.php';
include 'vehicleSearchFunctions.php';

// Selecciona la colección llamada "bikes" de la base de datos "pruebas"
$bikes = $dbPruebas->bikes;

$criteriaBike=json_decode(file_get_contents('php://input'), true);
if($criteriaBike!=null && $criteriaBike!=""){
    $allBikes=searchVehicleByCriteria($criteriaBike, $bikes);

    $motos=[];
    foreach ($allBikes as $bike)
    {
        array_push($motos,$bike);
    }

     echo json_encode($motos);  
}
?>