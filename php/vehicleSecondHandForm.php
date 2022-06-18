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
$imagenes = $_FILES['imageSecondHand']['name'];

//Datos vendedor
$nameSeller = $_POST['nameSellerSecondHand'];
$tfnoSeller = $_POST['tlfnoSellerSecondHand'];
$emailSeller = $_POST['emailSellerSecondHand'];
$directionSeller = $_POST['directionSellerSecondHand'];

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
    $ruta=$_FILES['imageSecondHand']['tmp_name'][$i];
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
    "precio"=> $price,  "imagenes"=> $imagenes,  "offer"=> "no",  "segunda_mano"=> "yes", "datos_anunciante"=>array(
        "nombre"=> $nameSeller, "telefono"=> $tfnoSeller, "email"=> $emailSeller, "direccion"=>$directionSeller
    ));

    //Convert Row (Document) to json
    $vehicle=json_encode($vehicle, JSON_NUMERIC_CHECK);

    //Convert JSON to BSON
    $bson = \MongoDB\BSON\fromJSON($vehicle);

    //Convert BSON to PHP Std Class object
    $row = \MongoDB\BSON\toPHP($bson);


    // Insert Record to Document
    $vehicleCollection->insertOne($row);
}
header("Location: ../index.html");
?>