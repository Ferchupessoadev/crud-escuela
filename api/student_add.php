<?php
require '../Models/model.php';
$model = new Model("escuela", "localhost", "root", "");
if($_POST)
{
	if ($_POST['name'] && $_POST['surname'] && $_POST["fecha_nacimiento"])
	{
		$data =	$model->addStudent($_POST['name'], $_POST['surname'], $_POST["fecha_nacimiento"]);
		echo json_encode($data);
	}
}
