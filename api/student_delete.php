<?php
require '../Models/model.php';
$model = new Model("escuela", "localhost", "root", "");
if ($_POST) {
    if ($_POST["id"]) {
        $data = $model->studentDelete($_POST["id"]);
        echo json_encode($data);
    }
}
