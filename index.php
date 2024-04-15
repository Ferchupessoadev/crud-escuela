<?php
include './Models/model.php';
$model = new Model("escuela", "localhost", "root", "");
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Crud - php alumnos</title>
	<!-- Custom css -->
	<link rel="stylesheet" href="css/style.css">
	<!-- Font Awesome CDN -->
	<script src="https://kit.fontawesome.com/f845b9182b.js" crossorigin="anonymous"></script>
</head>
<body>
	<header class="header">
		<h1 class="header__h1">E.E.T N°2</h1>
		<form class="form-add-student">
			<input class="add-student__input add-student__input-name" type="text" placeholder="Student name" name="name">
			<input class="add-student__input add-student__input-surname" type="text" placeholder="Student surname" name="surname">
			<input class="add-student__input add-student__input-date" type="date" name="fecha_nacimiento">
			<input class="add-student__input add-student__input-submit" id="form-data-send" type="submit" value="Añadir registro">
		</form>
	</header>	
	<!-- seccion de la lista de alumnos  -->
	<section class="students-list-section">
		<div class="section__student"> 
			<p class="student__p student__p-id">Alumno</p>
			<p class="student__p">Nombre</p>
			<p class="student__p">Apellido</p>
			<p class="student__p">Fecha de Nacimiento</p>
			<p>CRUD actions</p>
		</div>
		<?php foreach($model->getAllStudent() as $student): ?>
			<div class="section__student" id="<?= $student['id']?>"> 
				<p class="student__p student__p-id">N°<?= $student['id'] ?></p>
				<p class="student__p"><?= $student['name']?></p>
				<p class="student__p"><?= $student['surname']?></span></p>
				<p class="student__p"><?= $model->studentDateFormatting($student['fecha_nacimiento']) ?></p>
				<div class="student__crud">
					<button class="student-crud__button-delete student-crud__button"><i class="fa-solid fa-trash"></i></button>
					<button class="student-crud__button-edit student-crud__button"><i class="fa-solid fa-pen-to-square"></i></button>
				</div>
			</div>	
		<?php endforeach ?>
	</section>
	<script src="js/app.js" type="module"></script>
</body>
</html>
