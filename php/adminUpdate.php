<?php
include 'conexion.php';

//Datos vehiculo
$type = $_POST['typeVehicleUpdate'];
$brand = $_POST['brandUpdate'];
$model = $_POST['modelUpdate'];
$power = $_POST['powerUpdate'];
$cc = $_POST['ccUpdate'];
$gear = $_POST['gearUpdate'];
$nDoors = $_POST['nDoorsUpdate'];
$color = $_POST['colorUpdate'];
$fuel = $_POST['FuelUpdate'];
$year = $_POST['yearUpdate'];
$description = $_POST['descriptionUpdate'];
$price = $_POST['PriceUpdate'];
$imagenes = $_FILES['imageUpdate']['name'];
$offer = $_POST['offerUpdate'];
$idVehicleToUpdate=$_POST['idVehicle'];

if($type==="coche")
    $vehicleCollection = $dbPruebas->cars;
else if($type==="moto")
    $vehicleCollection = $dbPruebas->bikes;
else if($type==="furgoneta")
    $vehicleCollection = $dbPruebas->vans;
else
    $vehicleCollection = $dbPruebas->trucks;

for( $i=0 ; $i < sizeof($imagenes) ; $i++ ) {
    $imagenes["imagen$i"] = $imagenes[$i]; 
    unset($imagenes[$i]);
    $ruta=$_FILES['imageUpdate']['tmp_name'][$i];
    if($type==="coche"){
        $imagenes["imagen$i"]="cars/". $imagenes["imagen$i"];
        $destino="C:/xampp/htdocs/proyecto/img/" . $imagenes["imagen$i"];
        print_r($destino);
    }
    else if($type==="moto"){
        $imagenes["imagen$i"]="bikes/". $imagenes["imagen$i"];
        $destino="C:/xampp/htdocs/proyecto/img/" . $imagenes["imagen$i"];
    }
    else if($type==="furgoneta"){
        $imagenes["imagen$i"]="vans/". $imagenes["imagen$i"];
        $destino="C:/xampp/htdocs/proyecto/img/" . $imagenes["imagen$i"];
    }
    else{
        $imagenes["imagen$i"]="trucks/". $imagenes["imagen$i"];
        $destino="C:/xampp/htdocs/proyecto/img/" . $imagenes["imagen$i"];
    }
}

$vehicle = array("marca"=>$brand, "modelo"=>$model, "potencia"=>$power, "cilindrada"=> $cc, "cambio"=>$gear,
"nPuertas"=> $nDoors, "color"=> $color, "combustible"=> $fuel, "anno"=> $year, "descripcion"=> $description,
"precio"=> $price,  "imagenes"=> $imagenes,  "offer"=> "offer",  "segunda_mano"=> "no", "datos_anunciante" => null);

//Convert Row (Document) to json
$vehicle=json_encode($vehicle, JSON_NUMERIC_CHECK);

//Convert JSON to BSON
$bson = \MongoDB\BSON\fromJSON($vehicle);

//Convert BSON to PHP Std Class object
$row = \MongoDB\BSON\toPHP($bson);


// Insert Record to Document
$vehicleCollection->updateOne(['_id'=> new \MongoDB\BSON\ObjectId("$idVehicleToUpdate")],['$set' =>$row]);

header("Location: ../vistas/admin/homeAdmin.html");
?>