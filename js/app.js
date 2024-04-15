import Alumno from './Alumno.js'

const $form = document.querySelector(".form-add-student")
const $nameInput = document.querySelector(".add-student__input-name")
const $surnameInput = document.querySelector(".add-student__input-surname")
const $dateInput = document.querySelector(".add-student__input-date")
const $sendFormBtn = document.getElementById("form-data-send")
const $studentEditBtn = document.querySelector(".student-crud__button-edit")
const $studentDelteBtn = document.querySelector(".student-crud__button-delete")

$sendFormBtn.addEventListener("click", e => handlerSubmit(e))

async function handlerSubmit(e) {
	e.preventDefault()
	if($nameInput.value != "" || $surnameInput.value != "" || $dateInput.value != "")
	{
		const formdata = new FormData($form) 
		const response = await fetch("http://localhost/crud-escuela/api/student_add.php", {
			method: "POST",
			body: new URLSearchParams(formdata),
		})
		const data = await response.json()	
		if (response.ok) {
			const newAlumno = new Alumno(data.id, data.name, data.surname, data.fecha_nacimiento)
			newAlumno.createStudent();
		}
	}
}
