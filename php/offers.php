<?php
include 'conexion.php';
include 'vehicleSearchFunctions.php';

// Selecciona la colección llamada "bikes" de la base de datos "pruebas"
$cars = $dbPruebas->cars;
$bikes = $dbPruebas->bikes;
$trucks = $dbPruebas->trucks;
$vans = $dbPruebas->vans;

$criteriaVehicle=json_decode(file_get_contents('php://input'), true);

if($criteriaVehicle!=null && $criteriaVehicle!=""){
    $offerCars=searchVehicleByCriteriaWithOffer($criteriaVehicle, $cars);
    $offerBikes=searchVehicleByCriteriaWithOffer($criteriaVehicle, $bikes);
    $offerTrucks=searchVehicleByCriteriaWithOffer($criteriaVehicle, $trucks);
    $offerVans=searchVehicleByCriteriaWithOffer($criteriaVehicle, $vans);
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

foreach ($offerTrucks as $truck)
{
    array_push($allOfferVehicles,$truck);
}

foreach ($offerVans as $van)
{
    array_push($allOfferVehicles,$van);
}

echo json_encode($allOfferVehicles);  
?>