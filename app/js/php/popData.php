<?php

$ctrlSQL = $_REQUEST['ctrlSQL'];
$itemID = isset($_REQUEST['itemID']) ? $_REQUEST['itemID'] : null;
$categoryID = isset($_REQUEST['categoryID']) ? $_REQUEST['categoryID'] : null;
$subcategoryID = isset($_REQUEST['subcategoryID']) ? $_REQUEST['subcategoryID'] : null;
$sqlLimit = isset($_REQUEST['sqlLimit']) ? $_REQUEST['sqlLimit'] : null;

if(isset($_REQUEST['sqlKeyword'])){
    $sqlKeyword = $_REQUEST['sqlKeyword'];
    include('sql-search-like.php');
}else{
    include('sql.php');
}

include('config.php');

$db = new DB();

$data = $db->qryFire();

echo json_encode($data);