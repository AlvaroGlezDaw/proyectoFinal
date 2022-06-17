<?php
include 'conexion.php';
include 'vehicleSearchFunctions.php';


// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$cars = $dbPruebas->cars;

$criteriaCar=json_decode(file_get_contents('php://input'), true);
if($criteriaCar!=null && $criteriaCar!=""){
    $allcars=searchVehicleByCriteria($criteriaCar, $cars);

    $coches=[];
    foreach ($allcars as $car)
    {
        array_push($coches,$car);
    }

     echo json_encode($coches);  
}

?>