<?php
include 'conexion.php';

// Selecciona la colección llamada "bikes" de la base de datos "pruebas"
$cars = $dbPruebas->cars;
$bikes = $dbPruebas->bikes;

$offerCars = $cars->find( ['offer' => "yes"]);
$offerBikes = $bikes->find( ['offer' => "yes"]);
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