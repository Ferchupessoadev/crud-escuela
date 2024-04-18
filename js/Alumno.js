import studentHTML from './components_html/student.js'

export default class Alumno {
    constructor(name, surname, fechaNacimiento) {
        this.name = name;
        this.surname = surname;
        this.fechaNacimiento = fechaNacimiento;
    }

    createStudent(id) {
        const [deleteBtn] = studentHTML(id, this.name, this.surname, this.fechaNacimiento)
        // add listener to the delete and edit bottons.
        deleteBtn.addEventListener("click", () => this.studentDelete(id))
    }

    async studentDelete(id) {
        try {
            const formdata = new FormData();
            formdata.append('id', id);
            await fetch(
                'http://localhost/Crud-escuela/api/student_delete.php',
                {
                    method: 'POST',
                    body: formdata,
                },
            );
            document.getElementById(id).remove(id)
        } catch (error) {
            console.log(error);
        }
    }

    studentEdit(id) { console.log(id) }
}
