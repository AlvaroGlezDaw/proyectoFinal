<?php
include 'conexion.php';

function searchVehicleByCriteria($criteriaVehicule, $vehicleTable) {
    if($criteriaVehicule[0]=="" && $criteriaVehicule[1]=="")
        $allvehicules = $vehicleTable->find(['potencia' => ['$gte' => intval($criteriaVehicule[2])], 'precio' => ['$gte' => intval($criteriaVehicule[3])], 'segunda_mano' => $criteriaVehicule[4]]);
    else if($criteriaVehicule[0]!="" && $criteriaVehicule[1]==""){
        $allvehicules = $vehicleTable->find(['marca' => $criteriaVehicule[0], 'potencia' => ['$gte' => intval($criteriaVehicule[2])], 'precio' => ['$gte' => intval($criteriaVehicule[3])], 'segunda_mano' => $criteriaVehicule[4]]);
    }
    else if($criteriaVehicule[0]=="" && $criteriaVehicule[1]!=""){
        $allvehicules = $vehicleTable->find(['combustible'=>$criteriaVehicule[1], 'potencia' => ['$gte' => intval($criteriaVehicule[2])], 'precio' => ['$gte' => intval($criteriaVehicule[3])],'segunda_mano' => $criteriaVehicule[4]]);
    }
    else{
        $allvehicules = $vehicleTable->find(['marca' => $criteriaVehicule[0], 'combustible'=>$criteriaVehicule[1], 'potencia' => ['$gte' => intval($criteriaVehicule[2])], 'precio' => ['$gte' => intval($criteriaVehicule[3])], 'segunda_mano' => $criteriaVehicule[4]]);
    } 
    return $allvehicules;
}

function searchVehicleByCriteriaWithOffer($criteriaVehicule, $vehicleTable) {
    if($criteriaVehicule[0]=="" && $criteriaVehicule[1]=="")
        $allvehicules = $vehicleTable->find(['potencia' => ['$gte' => intval($criteriaVehicule[2])], 'precio' => ['$gte' => intval($criteriaVehicule[3])], 'offer' => 'yes']);
    else if($criteriaVehicule[0]!="" && $criteriaVehicule[1]==""){
        $allvehicules = $vehicleTable->find(['marca' => $criteriaVehicule[0], 'potencia' => ['$gte' => intval($criteriaVehicule[2])], 'precio' => ['$gte' => intval($criteriaVehicule[3])], 'offer' => 'yes']);
    }
    else if($criteriaVehicule[0]=="" && $criteriaVehicule[1]!=""){
        $allvehicules = $vehicleTable->find(['combustible'=>$criteriaVehicule[1], 'potencia' => ['$gte' => intval($criteriaVehicule[2])], 'precio' => ['$gte' => intval($criteriaVehicule[3])],'offer' => 'yes']);
    }
    else{
        $allvehicules = $vehicleTable->find(['marca' => $criteriaVehicule[0], 'combustible'=>$criteriaVehicule[1], 'potencia' => ['$gte' => intval($criteriaVehicule[2])], 'precio' => ['$gte' => intval($criteriaVehicule[3])], 'offer' => 'yes']);
    } 
    return $allvehicules;
}

function searchBrandVehicle($vehicleTable){
    $allBrands = $vehicleTable->find([], ['projection' => ['marca' => 1, '_id' => 0]]);
    $brands=array();
    $i=0;
    foreach ($allBrands as $brand)
    {
        if(!in_array($brand, $brands)){
            $brands[$i]=$brand;
            $i++;
        }
    }
    return $brands;
}

function searchAllVehicles($vehicleTable){
    $allvehicules = $vehicleTable->find();
    return $allvehicules;
}

function deleteVehicleById($vehicleId, $vehicleTable){
    $vehicleTable->deleteOne(['_id'=> new \MongoDB\BSON\ObjectId("$vehicleId")]);
}


?>