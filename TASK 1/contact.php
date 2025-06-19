<?php
$server_name="localhost";
$username="root";
$password="";
$database_name="taskdb";

$conn=mysqli_connect($server_name,$username,$password,$database_name);
//now check the connection
if(!$conn)
{
	die("Connection Failed:" . mysqli_connect_error());

}

if(isset($_POST['save']))
{	
	 $NAME = $_POST['NAME'];
	 $EMAIL = $_POST['EMAIL'];
	 $MESSAGE = $_POST['MESSAGE'];
	 

	 $sql_query = "INSERT INTO entry_details (NAME,EMAIL,MESSAGE)
	 VALUES ('$NAME','$EMAIL','$MESSAGE')";

	 if (mysqli_query($conn, $sql_query)) 
	 {
		echo "New Details Entry inserted successfully !";
	 } 
	 else
     {
		echo "Error: " . $sql . "" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
?>
