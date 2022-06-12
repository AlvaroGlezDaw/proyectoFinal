<?php
include 'conexion.php';

// Selecciona la colección llamada "bikes" de la base de datos "pruebas"
$bikes = $dbPruebas->bikes;

$criteriaBike=json_decode(file_get_contents('php://input'), true);
if($criteriaBike[0]=="" && $criteriaBike[1]=="")
    $allBikes = $bikes->find(['potencia' => ['$gte' => intval($criteriaBike[2])], 'precio' => ['$gte' => intval($criteriaBike[3])], 'segunda_mano' => $criteriaBike[4]]);
else if($criteriaBike[0]!="" && $criteriaBike[1]==""){
    $allBikes = $bikes->find(['marca' => $criteriaBike[0], 'potencia' => ['$gte' => intval($criteriaBike[2])], 'precio' => ['$gte' => intval($criteriaBike[3])], 'segunda_mano' => $criteriaBike[4]]);
}
else if($criteriaBike[0]=="" && $criteriaBike[1]!=""){
    $allBikes = $bikes->find(['combustible'=>$criteriaBike[1], 'potencia' => ['$gte' => intval($criteriaBike[2])], 'precio' => ['$gte' => intval($criteriaBike[3])], 'segunda_mano' => $criteriaBike[4]]);
}
else{
    $allBikes = $bikes->find(['marca' => $criteriaBike[0], 'combustible'=>$criteriaBike[1], 'potencia' => ['$gte' => intval($critericriteriaBikeaCar[2])], 'precio' => ['$gte' => intval($criteriaBike[3])],'segunda_mano' => $criteriaBike[4]]);
} 

$motos=[];
foreach ($allBikes as $bike)
{
    array_push($motos,$bike);
}

echo json_encode($motos);  
?>