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
$allOfferVehicles=crossVehicle($offerCars, $allOfferVehicles);
$allOfferVehicles=crossVehicle($offerBikes, $allOfferVehicles);
$allOfferVehicles=crossVehicle($offerTrucks, $allOfferVehicles);
$allOfferVehicles=crossVehicle($offerVans,$allOfferVehicles);

function crossVehicle($vehiclesToCross, $vehiclesInOffer){
    foreach ($vehiclesToCross as $vehicle)
    {
        array_push($vehiclesInOffer,$vehicle);
    }
    return $vehiclesInOffer;
}

echo json_encode($allOfferVehicles);  
?>