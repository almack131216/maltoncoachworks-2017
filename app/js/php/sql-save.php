<?php

$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
$name = $data->name;
$description = $data->description;

$ctrlQuery = "UPDATE catalogue SET name='$name',description='$description' WHERE id=$id";