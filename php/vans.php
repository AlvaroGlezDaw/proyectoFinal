<?php
include 'conexion.php';

// Selecciona la colección llamada "vans" de la base de datos "pruebas"
$vans = $dbPruebas->vans;

$criteriaVan=json_decode(file_get_contents('php://input'), true);
if($criteriaVan[0]=="" && $criteriaVan[1]=="")
    $allvans = $vans->find(['potencia' => ['$gte' => intval($criteriaVan[2])], 'precio' => ['$gte' => intval($criteriaVan[3])], 'segunda_mano' => $criteriaVan[4]]);
else if($criteriaVan[0]!="" && $criteriaVan[1]==""){
    $allvans = $vans->find(['marca' => $criteriaVan[0], 'potencia' => ['$gte' => intval($criteriaVan[2])], 'precio' => ['$gte' => intval($criteriaVan[3])], 'segunda_mano' => $criteriaVan[4]]);
}
else if($criteriaVan[0]=="" && $criteriaVan[1]!=""){
    $allvans = $vans->find(['combustible'=>$criteriaVan[1], 'potencia' => ['$gte' => intval($criteriaVan[2])], 'precio' => ['$gte' => intval($criteriaVan[3])],'segunda_mano' => $criteriaVan[4]]);
}
else{
    $allvans = $vans->find(['marca' => $criteriaVan[0], 'combustible'=>$criteriaVan[1], 'potencia' => ['$gte' => intval($criteriaVan[2])], 'precio' => ['$gte' => intval($criteriaVan[3])], 'segunda_mano' => $criteriaVan[4]]);
} 

$furgonetas=[];
foreach ($allvans as $van)
{
    array_push($furgonetas,$van);
}

echo json_encode($furgonetas);  
?>