<?php
include 'conexion.php';
include 'vehicleSearchFunctions.php';

// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$cars = $dbPruebas->cars;
$allCarBrands=searchBrandVehicle($cars);

echo json_encode($allCarBrands);
?>
