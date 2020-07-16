<?php
header('Access-Control-Allow-Origin: *');
require_once('classes/Helper.php');
require_once('classes/Gallery.php');
require 'classes/ImageUploader.php';

 $route = Helper::basePath();


$gallery = new Gallery();

if($route == 'gallery'){
    $gallery->load();
    echo $gallery->render();
}
?>

