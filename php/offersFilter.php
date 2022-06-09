<?php
include 'conexion.php';

// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$cars = $dbPruebas->cars;
$bikes = $dbPruebas->bikes;

$allCarBrands = $cars->find([], ['projection' => ['marca' => 1, '_id' => 0]]);
$allBikesBrands = $bikes->find([], ['projection' => ['marca' => 1, '_id' => 0]]);
$brands=array();
$i=0;
foreach ($allCarBrands as $brand)
{
    if(!in_array($brand, $brands)){
        $brands[$i]=$brand;
        $i++;
    }
}

foreach ($allBikesBrands as $brand)
{
    if(!in_array($brand, $brands)){
        $brands[$i]=$brand;
        $i++;
    }
}
echo json_encode($brands);
?>
