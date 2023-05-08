<?php

include "conectkarl.php";

$productos = json_decode(stripslashes_deep($_POST['productos']), true);
//print_r($productos);die();

$sql = $db->prepare("INSERT INTO `pedidos_mayo`(`nombre`, `celular`, `correo`, `delivery`, `zona`,
`precio_productos`, `precio_delivery`, `fecha`, `hora`, `encargado`, 
`direccion`, `referencia`, `detalles`, `comprobante`, `productos`) 
VALUES ( ?, ?, ?, ?, ?, 
?, ?, ?, ?, ?, 
?, ?, ?, ?, ?
)");

$resp = $sql->execute([
    $_POST['nombre'], $_POST['celular'],  $_POST['correo'],  $_POST['delivery'],  $_POST['zona'], 
    $_POST['precio_productos'],  $_POST['precio_delivery'], $_POST['fecha'],  $_POST['hora'],  $_POST['encargado'], 
    $_POST['direccion'], $_POST['referencia'],  $_POST['detalles'],  $_POST['comprobante'], json_encode($_POST['productos'], JSON_UNESCAPED_UNICODE)
]);
//$sql -> debugDumpParams();
if($resp){
    echo 'ok';
    ob_start();
    require('correo.php');
    ob_clean();
}else{
    echo 'error';
}

/* $sql = $db->prepare("select 'ABC' where 1 = ?; "  );
$resp = $sql->execute([ 1 ]);
if($resp){
    echo 'ok';
}else{
    echo 'error';
} */

?>