<?php
include 'conexion.php';
include 'vehicleSearchFunctions.php';

// Selecciona la colección llamada "trucks" de la base de datos "pruebas"
$trucks = $dbPruebas->trucks;

$criteriaTruck=json_decode(file_get_contents('php://input'), true);
if($criteriaTruck!=null && $criteriaTruck!=""){
    $alltrucks=searchVehicleByCriteria($criteriaTruck, $trucks);

    $camiones=[];
    foreach ($alltrucks as $truck)
    {
        array_push($camiones,$truck);
    }

     echo json_encode($camiones);  
}
?>