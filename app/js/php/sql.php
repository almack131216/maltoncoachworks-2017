<?php
$commonFields = "id,name,image_large";
$snippetField = "LEFT(detail_5,100) AS snippet";//LEFT(description,100) AS snippet

$commonWhere = "status=1";//AND image_large!=''
$tablename = "catalogue";

$qSelect = "SELECT $commonFields,$snippetField,category AS categoryID";
$qFrom = " FROM $tablename";
$qWhere = " WHERE $commonWhere";
if(isset($categoryID)) $qWhere.=" AND category=$categoryID";
if(isset($subcategoryID)) $qWhere.=" AND subcategory=$subcategoryID";
//if($sqlKeyword) $qWhere.=" AND id_xtra=0 AND name LIKE '%".$sqlKeyword."%'";
$qOrder = " ORDER BY upload_date DESC";
$qLimit = "";
if(isset($sqlLimit)) $qLimit = " LIMIT $sqlLimit";
$ctrlQueryBuild = true;


/* Standard Queries included but not shown:
portfolioCtrl
staffCtrl
servicesCtrl
testimonialsCtrl
newsCtrl
*/
if($ctrlSQL=="banner_carousel"){
    $qWhere .= " AND image_large!=''";
}elseif($ctrlSQL=="block_2Ctrl"){
    $qWhere .= " AND image_large!=''";
    $qSelect .= ",detail_1 AS YouTubeID,detail_5 as snippetFull";
}elseif($ctrlSQL=="block_3Ctrl"){
    $qWhere .= " AND image_large!=''";
    $qSelect .= ",detail_1 AS year,price,price_details AS priceDetails";
}elseif($ctrlSQL=="staffCtrl" || $ctrlSQL=="servicesCtrl" || $ctrlSQL=="featuresCtrl"){
    $qOrder = " ORDER BY position_insubcat ASC";
}elseif($ctrlSQL=="searchCtrl"){
    //$qWhere .= " AND name LIKE '%tvr%'";
    /*$qOrder = " ORDER BY position_insubcat ASC";*/
    //$qLimit = " LIMIT 3";
}elseif($ctrlSQL=="itemPreviewCtrl"){
    $ctrlQueryBuild = false;
    if(isset($_REQUEST['itemID'])) $itemID = $_REQUEST['itemID'];
    $ctrlQuery = "SELECT $commonFields,$snippetField FROM $tablename WHERE id=$itemID";
}elseif($ctrlSQL=="itemDetailsCtrl"){
    $ctrlQueryBuild = false;    
    if(isset($_REQUEST['itemID'])) $itemID = $_REQUEST['itemID'];
    $ctrlQuery = "SELECT $commonFields,category AS categoryID,subcategory AS subcategoryID,detail_5 as snippetFull, description FROM $tablename WHERE id=$itemID OR id_xtra=$itemID ORDER BY id ASC,position_initem ASC $qLimit";
}
if($ctrlQueryBuild) $ctrlQuery = $qSelect.$qFrom.$qWhere.$qOrder.$qLimit;