class Alumno {
	constructor(name, surname, fechaNacimiento) 
	{
		this.name = name
		this.surname = surname
		this.fechaNacimiento = fechaNacimiento
	}

	studentDelete(id) 
	{
		console.log("borramos el alumno con una peticion a la api del servidor")	
	}


	studentEdit(id) 
	{
		console.log("editamos los datos del alumno haciendo una peticion a la api del servidor")
	}
}
