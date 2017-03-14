<?php

if($_REQUEST['username']) $u = $_REQUEST['username'];
if($_REQUEST['password']) $p = $_REQUEST['password'];

//$p_raw = $_POST['password'];//$CMSTextFormat->escape_data($_POST['password']);
//$salt = 's+(_a*';
//$p = md5($p_raw.$salt);

//fe4d69a2a1b9f8efe297ad5b3fc39682
$data = json_decode(file_get_contents("php://input"));
$u = $data->username;
$p = $data->password;
$ctrlQuery = "SELECT * FROM users WHERE username='mcw' AND password='mcw' LIMIT 1";

include('config.php');

$db = new DB();

$responsex = $db->qryFire();

echo json_encode($responsex);