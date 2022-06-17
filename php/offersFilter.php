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
foreach ($allCarBrands as $brand)
{
    if(!in_array($brand, $brands)){
        $brands[$i]=$brand;
        $i++;
    }
}

foreach ($allBikesBrands as $brand)
{
    if(!in_array($brand, $brands)){
        $brands[$i]=$brand;
        $i++;
    }
}

foreach ($allTrucksBrands as $brand)
{
    if(!in_array($brand, $brands)){
        $brands[$i]=$brand;
        $i++;
    }
}

foreach ($allVansBrands as $brand)
{
    if(!in_array($brand, $brands)){
        $brands[$i]=$brand;
        $i++;
    }
}
echo json_encode($brands);
?>
