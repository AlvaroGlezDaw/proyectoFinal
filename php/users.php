<?php
include 'conexion.php';

// Selecciona la colección llamada "cars" de la base de datos "pruebas"
$users = $dbPruebas->users;
$selectedUser=[];

$userEmail=json_decode(file_get_contents('php://input'), true);

$userToFind=$users->findOne(['email' => $userEmail]);

array_push($selectedUser, $userToFind);

echo json_encode($selectedUser);  
?>