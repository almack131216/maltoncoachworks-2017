<?php
$commonFields = "c.id, c.name, c.description, c.image_large";
$snippetField = "LEFT(c.detail_5,100) AS snippet";

$commonWhere = "c.id_xtra=0 AND c.status=1";
$tablename = "catalogue";

$qSelect = "SELECT $commonFields,$snippetField";
$qSelect .= ", MATCH(c.name) AGAINST ('$sqlKeyword*' IN BOOLEAN MODE) AS score";
$qSelect .= ", MATCH(c.detail_5) AGAINST ('$sqlKeyword*' IN BOOLEAN MODE) AS score2";
$qSelect .= ", MATCH(c.description) AGAINST ('$sqlKeyword*' IN BOOLEAN MODE) AS score3";

$qFrom = " FROM $tablename c";

$qWhere = " WHERE $commonWhere";
if($categoryID) $qWhere.=" AND c.category=$categoryID";
if($subcategoryID) $qWhere.=" AND c.subcategory=$subcategoryID";
$qWhere .= " AND MATCH(c.name,c.detail_5,c.description) AGAINST ('$sqlKeyword*' IN BOOLEAN MODE)";

$qOrder = " ORDER BY score DESC,score2 DESC,score3 DESC";

$qLimit = "";
if($sqlLimit) $qLimit = " LIMIT $sqlLimit";



$searchQuery = $qSelect.$qFrom.$qWhere.$qOrder.$qLimit;
//echo $searchQuery;
$ctrlQuery = $searchQuery;