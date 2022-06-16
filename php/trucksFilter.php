<?php
include 'conexion.php';

// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$trucks = $dbPruebas->trucks;

$allBrands = $trucks->find([], ['projection' => ['marca' => 1, '_id' => 0]]);
$brands=array();
$i=0;
foreach ($allBrands as $brand)
{
    if(!in_array($brand, $brands)){
        $brands[$i]=$brand;
        $i++;
    }
}
echo json_encode($brands);
?>
