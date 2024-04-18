/** * 
Esta es una descripción de la función. 
* @param {tipo de dato} parametro - Una breve descripción del parámetro. 
* @returns {tipo de dato} - Una breve descripción del valor de retorno. 
*/
export default function studentHTML(id, name, surname, fechaNacimiento) {
    const containerStudents = document.querySelector('.students-list-section');
    const divAlumno = document.createElement('DIV');
    divAlumno.classList.add('section__student');
    divAlumno.setAttribute('id', id);

    const studentPId = document.createElement('P');
    studentPId.classList.add('student__p');
    studentPId.classList.add('student__p-id');
    studentPId.innerHTML = `N° ${id}`;

    const studentPName = document.createElement('P');
    studentPName.classList.add('student__p');
    studentPName.textContent = name;

    const studentPSurname = document.createElement('P');
    studentPSurname.classList.add('student__p');
    studentPSurname.textContent = surname;

    const studentPFecha = document.createElement('P');
    studentPFecha.classList.add('student__p');
    studentPFecha.textContent = fechaNacimiento;

    const divCrud = document.createElement("DIV")
    divCrud.classList.add("student__crud")

    const deleteBtn = document.createElement("BUTTON")
    deleteBtn.className = "student-crud__button-delete student-crud__button"
    const deleteBtnIcon = document.createElement("I")
    deleteBtnIcon.className = "fa-solid fa-trash"
    deleteBtn.appendChild(deleteBtnIcon)

    const editBtn = document.createElement("BUTTON")
    editBtn.className = "student-crud__button-edit student-crud__button"
    const editBtnIcon = document.createElement("I")
    editBtnIcon.className = "fa-solid fa-pen-to-square"
    editBtn.appendChild(editBtnIcon)

    divAlumno.appendChild(studentPId);
    divAlumno.appendChild(studentPName);
    divAlumno.appendChild(studentPSurname);
    divAlumno.appendChild(studentPFecha);
    divCrud.appendChild(deleteBtn)
    divCrud.appendChild(editBtn)
    divAlumno.appendChild(divCrud)
    containerStudents.appendChild(divAlumno);
    return [deleteBtn]
}
