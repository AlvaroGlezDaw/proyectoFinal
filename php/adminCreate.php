<?php
include 'conexion.php';

//Datos vehiculo
$type = $_POST['typeVehicleCreate'];
$brand = $_POST['brandCreate'];
$model = $_POST['modelCreate'];
$power = $_POST['powerCreate'];
$cc = $_POST['ccCreate'];
$gear = $_POST['gearCreate'];
$nDoors = $_POST['nDoorsCreate'];
$color = $_POST['colorCreate'];
$fuel = $_POST['FuelCreate'];
$year = $_POST['yearCreate'];
$description = $_POST['descriptionCreate'];
$price = $_POST['PriceCreate'];
$imagenes = $_FILES['imageCreate']['name'];
$offer = $_POST['offerCreate'];

if($type==="coche")
    $vehicleCollection = $dbPruebas->cars;
else if($type==="moto")
    $vehicleCollection = $dbPruebas->bikes;
else if($type==="furgoneta")
    $vehicleCollection = $dbPruebas->vans;
else
    $vehicleCollection = $dbPruebas->trucks;

$saveImages=false;
for( $i=0 ; $i < sizeof($imagenes) ; $i++ ) {
    $imagenes["imagen$i"] = $imagenes[$i]; 
    unset($imagenes[$i]);
    $ruta=$_FILES['imageCreate']['tmp_name'][$i];
    if($type==="coche"){
        $imagenes["imagen$i"]="cars/". $imagenes["imagen$i"];
        $destino="C:/xampp/htdocs/proyecto/img/" . $imagenes["imagen$i"];
        print_r($destino);
        if(move_uploaded_file($ruta, $destino))
            $saveImages=true;
    }
    else if($type==="moto"){
        $imagenes["imagen$i"]="bikes/". $imagenes["imagen$i"];
        $destino="C:/xampp/htdocs/proyecto/img/" . $imagenes["imagen$i"];
        if(move_uploaded_file($ruta, $destino))
            $saveImages=true;
    }
    else if($type==="furgoneta"){
        $imagenes["imagen$i"]="vans/". $imagenes["imagen$i"];
        $destino="C:/xampp/htdocs/proyecto/img/" . $imagenes["imagen$i"];
        if(move_uploaded_file($ruta, $destino))
            $saveImages=true;
    }
    else{
        $imagenes["imagen$i"]="trucks/". $imagenes["imagen$i"];
        $destino="C:/xampp/htdocs/proyecto/img/" . $imagenes["imagen$i"];
        if(move_uploaded_file($ruta, $destino))
            $saveImages=true;
    }
}

if($saveImages){
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
    $vehicleCollection->insertOne($row);
}
header("Location: ../vistas/admin/homeAdmin.html");
?>