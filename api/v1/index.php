<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require_once('classes/Helper.php');
require_once('classes/Gallery.php');
require 'classes/ImageUploader.php';

 $route = Helper::basePath();


$gallery = new Gallery();

if($route == 'gallery'){

    $gallery->load();
    echo $gallery->render();

}else if($route == 'upload'){

    $upload = new ImageUploader($_FILES['file']['name'],$_FILES['file']['tmp_name']);
    $upload->startUpload();
}
?>

