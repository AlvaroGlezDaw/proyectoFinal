<?php
include 'conexion.php';

// Selecciona la colección llamada "trucks" de la base de datos "pruebas"
$trucks = $dbPruebas->trucks;

$criteriaTruck=json_decode(file_get_contents('php://input'), true);
if($criteriaTruck[0]=="" && $criteriaTruck[1]=="")
    $alltrucks = $trucks->find(['potencia' => ['$gte' => intval($criteriaTruck[2])], 'precio' => ['$gte' => intval($criteriaTruck[3])], 'segunda_mano' => $criteriaTruck[4]]);
else if($criteriaTruck[0]!="" && $criteriaTruck[1]==""){
    $alltrucks = $trucks->find(['marca' => $criteriaTruck[0], 'potencia' => ['$gte' => intval($criteriaTruck[2])], 'precio' => ['$gte' => intval($criteriaTruck[3])], 'segunda_mano' => $criteriaTruck[4]]);
}
else if($criteriaTruck[0]=="" && $criteriaTruck[1]!=""){
    $alltrucks = $trucks->find(['combustible'=>$criteriaTruck[1], 'potencia' => ['$gte' => intval($criteriaTruck[2])], 'precio' => ['$gte' => intval($criteriaTruck[3])],'segunda_mano' => $criteriaTruck[4]]);
}
else{
    $alltrucks = $trucks->find(['marca' => $criteriaTruck[0], 'combustible'=>$criteriaTruck[1], 'potencia' => ['$gte' => intval($criteriaTruck[2])], 'precio' => ['$gte' => intval($criteriaTruck[3])], 'segunda_mano' => $criteriaTruck[4]]);
} 

$camiones=[];
foreach ($alltrucks as $truck)
{
    array_push($camiones,$truck);
}

echo json_encode($camiones);  
?>