<?php
include 'conexion.php';
include 'vehicleSearchFunctions.php';

// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$bikes = $dbPruebas->bikes;
$allBikesBrands=searchBrandVehicle($bikes);

echo json_encode($allBikesBrands);
?>
