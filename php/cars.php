<?php
include 'conexion.php';

// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$cars = $dbPruebas->cars;

$criteriaCar=json_decode(file_get_contents('php://input'), true);
if($criteriaCar[0]=="" && $criteriaCar[1]=="")
    $allcars = $cars->find(['potencia' => ['$gte' => intval($criteriaCar[2])], 'precio' => ['$gte' => intval($criteriaCar[3])], 'segunda_mano' => $criteriaCar[4]]);
else if($criteriaCar[0]!="" && $criteriaCar[1]==""){
    $allcars = $cars->find(['marca' => $criteriaCar[0], 'potencia' => ['$gte' => intval($criteriaCar[2])], 'precio' => ['$gte' => intval($criteriaCar[3])], 'segunda_mano' => $criteriaCar[4]]);
}
else if($criteriaCar[0]=="" && $criteriaCar[1]!=""){
    $allcars = $cars->find(['combustible'=>$criteriaCar[1], 'potencia' => ['$gte' => intval($criteriaCar[2])], 'precio' => ['$gte' => intval($criteriaCar[3])],'segunda_mano' => $criteriaCar[4]]);
}
else{
    $allcars = $cars->find(['marca' => $criteriaCar[0], 'combustible'=>$criteriaCar[1], 'potencia' => ['$gte' => intval($criteriaCar[2])], 'precio' => ['$gte' => intval($criteriaCar[3])], 'segunda_mano' => $criteriaCar[4]]);
} 

$coches=[];
foreach ($allcars as $car)
{
    array_push($coches,$car);
}

echo json_encode($coches);  
?>