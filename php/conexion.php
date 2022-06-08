<?php

require '../vendor/autoload.php';

// Creo un alias del namespace
use MongoDB\Client as Mongo;

// Crea una instancia del driver MongoDB
$mongo= new Mongo("mongodb://localhost:27017");

// Selecciona la base de datos llamada "Vehicles"
$dbPruebas = $mongo->Vehicles;
?>