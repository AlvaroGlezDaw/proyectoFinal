<?php
include 'conexion.php';
include 'vehicleSearchFunctions.php';

// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$trucks = $dbPruebas->trucks;
$allTrucksBrands=searchBrandVehicle($trucks);

echo json_encode($allTrucksBrands);
?>
