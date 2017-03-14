<?php
$JoinTable_Subcategory = true;
$commonFields = "c.id, c.name, c.description, c.image_large, c.detail_5, c.category AS categoryID, c.subcategory AS subcategoryID";
$snippetField = "LEFT(c.detail_5,100) AS snippet";
$filterLocations = "CONCAT(c.category,'_',c.subcategory) AS filterTag";

$commonWhere = "c.id_xtra=0 AND c.status=1";
$tablename = "catalogue";

$qSelect = "SELECT $commonFields,$snippetField,$filterLocations";
$qSelect .= ", (c.name LIKE '%$sqlKeyword%') AS score";
$qSelect .= ", (c.detail_5 LIKE '%$sqlKeyword%') AS score2";
$qSelect .= ", (c.description LIKE '%$sqlKeyword%') AS score3";
if($JoinTable_Subcategory) $qSelect .= ", csc.subcategory AS subcategoryName";

$qFrom = " FROM $tablename c";
if($JoinTable_Subcategory) $qFrom .= " LEFT JOIN catalogue_subcats AS csc ON c.subcategory=csc.id";

$qWhere = " WHERE $commonWhere";
if($JoinTable_Subcategory) $qWhere .= "";
if($categoryID) $qWhere.=" AND c.category=$categoryID";
if($subcategoryID) $qWhere.=" AND c.subcategory=$subcategoryID";
$qWhere .= " AND (";
$qWhere .= " (c.name LIKE '%$sqlKeyword%')";
$qWhere .= " OR (c.detail_5 LIKE '%$sqlKeyword%')";
$qWhere .= " OR (c.description LIKE '%$sqlKeyword%')";
$qWhere .= " )";
if($JoinTable_Subcategory) $qWhere .= " AND c.subcategory=csc.id";

$qOrder = " ORDER BY score DESC,score2 DESC,score3 DESC";

$qLimit = "";
if($sqlLimit) $qLimit = " LIMIT $sqlLimit";



$searchQuery = $qSelect.$qFrom.$qWhere.$qOrder.$qLimit;
//echo $searchQuery;
$ctrlQuery = $searchQuery;