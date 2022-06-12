<?php
include 'conexion.php';

//Datos vehiculo
$type = $_POST['typeVehicleSecondHand'];
$brand = $_POST['brandSecondHand'];
$model = $_POST['modelSecondHand'];
$power = $_POST['powerSecondHand'];
$cc = $_POST['ccSecondHand'];
$gear = $_POST['gearSecondHand'];
$nDoors = $_POST['nDoorsSecondHand'];
$color = $_POST['colorSecondHand'];
$fuel = $_POST['FuelSecondHand'];
$year = $_POST['yearSecondHand'];
$description = $_POST['descriptionSecondHand'];
$price = $_POST['PriceSecondHand'];
$imagenes = $_POST['imageSecondHand'];

//Datos vendedor
$nameSeller = $_POST['nameSellerSecondHand'];
$tfnoSeller = $_POST['tlfnoSellerSecondHand'];
$emailSeller = $_POST['emailSellerSecondHand'];

if($type==="coche")
    $vehicleCollection = $dbPruebas->cars;
else if($type==="moto")
    $vehicleCollection = $dbPruebas->bikes;
else if($type==="furgoneta")
    $vehicleCollection = $dbPruebas->vans;
else
    $vehicleCollection = $dbPruebas->trucks;


$vehicle = array("marca"=>$brand, "modelo"=>$model, "potencia"=>$power, "cilindrada"=> $cc, "cambio"=>$gear,
"nPuertas"=> $nDoors, "color"=> $color, "combustible"=> $fuel, "anno"=> $year, "descripcion"=> $description,
"precio"=> $price,  "imagen"=> "img/cars/Mazda-Mx5.jpg",  "offer"=> "no",  "segunda_mano"=> "yes", "datos_anunciante"=>array(
    "nombre"=> $nameSeller, "telefono"=> $tfnoSeller, "email"=> $emailSeller
));

//Convert Row (Document) to json
$vehicle=json_encode($vehicle, JSON_NUMERIC_CHECK);

//Convert JSON to BSON
$bson = \MongoDB\BSON\fromJSON($vehicle);

//Convert BSON to PHP Std Class object
$row = \MongoDB\BSON\toPHP($bson);


// Insert Record to Document
$vehicleCollection->insertOne($row);
?>