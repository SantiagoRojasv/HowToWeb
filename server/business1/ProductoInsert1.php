<?php
    require_once('../Daos/ProductoDAO1.php');

    $cuerpo = file_get_contents('php://input');
    $productoDTO = json_decode($cuerpo);

    $productoDAO = new ProductoDAO();
    $producto = new Producto(0,$productoDTO->comentario,0);
    $results = $productoDAO->create($producto);
    echo $results;

?>