<?php
class Model
{
    public string $dbname;
    public string $server;
    public string $username;
    public string $password;
    public $conn;

    function __construct($dbname, $server, $username, $password)
    {
        $this->dbname = $dbname;
        $this->server = $server;
        $this->username = $username;
        $this->password = $password;
        $this->connectDB();
    }

    public function connectDB()
    {
        try {
            $this->conn = new PDO("mysql:host={$this->server};dbname={$this->dbname}", $this->username, $this->password);
        } catch (\PDOException $th) {
            echo throw $th;
            echo $th;
        }
    }

    public function getAllStudent()
    {
        try {
            $allStudents = [];
            $sql = "SELECT * FROM alumnos";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $allStudents = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (\Throwable) {
            echo "ocurrio un error. Lo sentimos.";
        }
        return $allStudents;
    }

    public function addStudent($name, $surname, $fechaNacimiento)
    {
        try {
            $sql = "INSERT INTO alumnos (name, surname, fecha_nacimiento) VALUES (?, ?, ?)";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute([$name, $surname, $fechaNacimiento]);

            $id = intval($this->conn->lastInsertId());

            $data = [
                "id" => $id,
                "name" => $name,
                "surname" => $surname,
                "fecha_nacimiento" => $fechaNacimiento,
            ];

            return $data;
        } catch (\PDOException $e) {
            return $e->getMessage();
        }
    }

    public function studentDateFormatting($studentDate)
    {
        return implode("/", array_reverse(explode("-", $studentDate)));
    }


    public function studentDelete($id)
    {
        try {
            $sql = "DELETE FROM alumnos WHERE id = ?";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute([$id]);

            $data = [
                "status_code" => 200,
                "msj" => "Alumno eliminado correctamente",
            ];

            return $data;
        } catch (\PDOException) {
            $data = [
                "status_code" => 500,
                "msj" => "Ocurrio un error en el servidor, vuelve mas tarde.",
            ];
            return $data;
        }
    }
}
