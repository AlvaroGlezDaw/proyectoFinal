<?php
include 'conexion.php';
include 'vehicleSearchFunctions.php';

// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$cars = $dbPruebas->cars;
$bikes = $dbPruebas->bikes;
$vans = $dbPruebas->vans;
$trucks = $dbPruebas->trucks;

$allCarBrands=searchBrandVehicle($cars);
$allBikesBrands=searchBrandVehicle($bikes);
$allTrucksBrands=searchBrandVehicle($trucks);
$allVansBrands=searchBrandVehicle($vans);

$brands=array();
$i=0;
$brands=crossBrands($allCarBrands,$brands);
$brands=crossBrands($allBikesBrands,$brands);
$brands=crossBrands($allTrucksBrands,$brands);
$brands=crossBrands($allVansBrands,$brands);

function crossBrands($allVehicleBrands, $brands){
    $i=sizeof($brands);
    foreach ($allVehicleBrands as $brand)
    {
        if(!in_array($brand, $brands)){
            $brands[$i]=$brand;
            $i++;
        }
    }
    return $brands;
}

echo json_encode($brands);
?>
