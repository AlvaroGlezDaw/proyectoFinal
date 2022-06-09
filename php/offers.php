<?php
include 'conexion.php';

// Selecciona la colección llamada "bikes" de la base de datos "pruebas"
$cars = $dbPruebas->cars;
$bikes = $dbPruebas->bikes;

$criteriaVehicle=json_decode(file_get_contents('php://input'), true);

//coches
if($criteriaVehicle[0]=="" && $criteriaVehicle[1]=="")
    $offerCars = $cars->find(['potencia' => ['$gte' => intval($criteriaVehicle[2])], 'precio' => ['$gte' => intval($criteriaVehicle[3])], 'offer' => 'yes']);
else if($criteriaVehicle[0]!="" && $criteriaVehicle[1]==""){
    $offerCars = $cars->find(['marca' => $criteriaVehicle[0], 'potencia' => ['$gte' => intval($criteriaVehicle[2])], 'precio' => ['$gte' => intval($criteriaVehicle[3])], 'offer' => 'yes']);
}
else if($criteriaVehicle[0]=="" && $criteriaVehicle[1]!=""){
    $offerCars = $cars->find(['combustible'=>$criteriaVehicle[1], 'potencia' => ['$gte' => intval($criteriaVehicle[2])], 'precio' => ['$gte' => intval($criteriaVehicle[3])],'offer' => 'yes']);
}
else{
    $offerCars = $cars->find(['marca' => $criteriaVehicle[0], 'combustible'=>$criteriaVehicle[1], 'potencia' => ['$gte' => intval($criteriaVehicle[2])], 'precio' => ['$gte' => intval($criteriaVehicle[3])], 'offer' => 'yes']);
} 

//bikes
if($criteriaVehicle[0]=="" && $criteriaVehicle[1]=="")
    $offerBikes = $bikes->find(['potencia' => ['$gte' => intval($criteriaVehicle[2])], 'precio' => ['$gte' => intval($criteriaVehicle[3])], 'offer' => 'yes']);
else if($criteriaVehicle[0]!="" && $criteriaVehicle[1]==""){
    $offerBikes = $bikes->find(['marca' => $criteriaVehicle[0], 'potencia' => ['$gte' => intval($criteriaVehicle[2])], 'precio' => ['$gte' => intval($criteriaVehicle[3])], 'offer' => 'yes']);
}
else if($criteriaVehicle[0]=="" && $criteriaVehicle[1]!=""){
    $offerBikes = $bikes->find(['combustible'=>$criteriaVehicle[1], 'potencia' => ['$gte' => intval($criteriaVehicle[2])], 'precio' => ['$gte' => intval($criteriaVehicle[3])],'offer' => 'yes']);
}
else{
    $offerBikes = $bikes->find(['marca' => $criteriaVehicle[0], 'combustible'=>$criteriaVehicle[1], 'potencia' => ['$gte' => intval($critericriteriaVehicleaCar[2])], 'precio' => ['$gte' => intval($criteriaVehicle[3])],'offer' => 'yes']);
} 

$allOfferVehicles=[];
foreach ($offerCars as $car)
{
    array_push($allOfferVehicles,$car);
}
foreach ($offerBikes as $bike)
{
    array_push($allOfferVehicles,$bike);
}

echo json_encode($allOfferVehicles);  
?>