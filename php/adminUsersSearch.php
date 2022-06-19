<?php
include 'conexion.php';

$users = $dbPruebas->users;

$allUsers=$users->find();

$usuarios=[];
foreach ($allUsers as $user)
{
    array_push($usuarios,$user);
}

echo json_encode($usuarios);  

?>