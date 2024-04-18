import Alumno from './Alumno.js'

const $nameInput = document.querySelector(".add-student__input-name")
const $surnameInput = document.querySelector(".add-student__input-surname")
const $dateInput = document.querySelector(".add-student__input-date")
const $sendFormBtn = document.getElementById("form-data-send")
const $studentEditBtns = document.querySelectorAll(".student-crud__button-edit")
const $studentDeleteBtns = document.querySelectorAll(".student-crud__button-delete")

$sendFormBtn.addEventListener("click", e => handlerSubmit(e))

async function handlerSubmit(e) {
    e.preventDefault()
    if ($nameInput.value != "" || $surnameInput.value != "" || $dateInput.value != "") {
        try {
            const formdata = new FormData()
            const fechaNacimiento = $dateInput.value.split('/').reverse().join('-');
            formdata.append("name", $nameInput.value)
            formdata.append("surname", $surnameInput.value)
            formdata.append("fecha_nacimiento", fechaNacimiento)
            const response = await fetch("http://localhost/Crud-escuela/api/student_add.php", {
                method: "POST",
                body: formdata,
            })
            const data = await response.json()
            const newAlumno = new Alumno(data.name, data.surname, data.fecha_nacimiento)
            newAlumno.createStudent(data.id);
        } catch (er) {
            console.log(er)
        }
        console.log($dateInput.value)
    }
}

// delete and update alumno.
async function handlerDelete(id) {
    try {
        const formdata = new FormData()
        formdata.append("id", id);
        const response = await fetch("http://localhost/Crud-escuela/api/student_delete.php", {
            method: "POST",
            body: formdata,
        })
        const data = await response.json()
        console.log(data);
        // document.getElementById(id).remove()
    } catch (error) {
        console.log(error);
    }
}

// Add listener to buttons coming from the backend
$studentDeleteBtns.forEach($studentDeleteBtn => {
    $studentDeleteBtn.addEventListener("click", () => {
        const id = $studentDeleteBtn.parentElement.parentElement.getAttribute("id")
        handlerDelete(id)
        // console.log(id)
    });
})
