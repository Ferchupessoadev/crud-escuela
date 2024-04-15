export default class Alumno {
	constructor(id, name, surname, fechaNacimiento) 
	{
		this.id = id
		this.name = name
		this.surname = surname
		this.fechaNacimiento = fechaNacimiento
	}

	createStudent() 
	{
		const containerStudents = document.querySelector(".students-list-section")
		const divAlumno = document.createElement("DIV")
		divAlumno.classList.add("section__student")
		divAlumno.setAttribute("id", this.id)
		
		const studentPId = document.createElement("P")
		studentPId.classList.add("student__p")
		studentPId.classList.add("student__p-id")
		studentPId.textContent = `N°${this.id}`

		const studentPName = document.createElement("P")
        studentPName.classList.add("student__p")
        studentPId.textContent = this.name
		
		const studentPSurname = document.createElement("P")
        studentPSurname.classList.add("student__p")
        studentPSurname.textContent = this.surname 

		const studentPFecha = document.createElement("P")
        studentPFecha.classList.add("student__p")
        studentPFecha.textContent = this.fechaNacimiento 

		divAlumno.appendChild(studentPId)
		divAlumno.appendChild(studentPName)
		divAlumno.appendChild(studentPSurname)
		divAlumno.appendChild(studentPFecha)
		containerStudents.appendChild(divAlumno)
	}

	studentDelete(id) 
	{
	}


	studentEdit(id) 
	{
	}
}
