<?php
class Model {
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
		} catch (\PDOException) {
			echo "ocurrio un error, lo siento vulve mas tarde";
		}
	}

	public function studentDateFormatting($studentDate)
	{
		return implode("/",array_reverse(explode("-",$studentDate)));
	}
}
