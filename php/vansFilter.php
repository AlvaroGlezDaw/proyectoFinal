<?php
include 'conexion.php';
include 'vehicleSearchFunctions.php';

// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$vans = $dbPruebas->vans;
$allVansBrands=searchBrandVehicle($vans);

echo json_encode($allVansBrands);
?>