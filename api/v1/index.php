<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
require_once('classes/Helper.php');
require_once('classes/Gallery.php');
require 'classes/ImageUploader.php';
require 'classes/ImageManager.php';

$route = Helper::basePath();

if($route == 'gallery'){
    try{
    $gallery = new Gallery();
    $gallery->load();
    echo $gallery->render();
    }catch (Exception $e){

    }

}else if($route == 'upload'){

    $upload = new ImageUploader($_FILES['file']['name'],$_FILES['file']['tmp_name']);
    $upload->startUpload();

}else if($route == 'save'){

    if (!extension_loaded('imagick')){
        $data = array('status'=>false,'msg'=> 'Imagick not installed.');
        echo json_encode($data);
    }else{

        $data = json_decode($_POST['data']);
        $image = new ImageManager($data);
        $image->save();

    }
}
?>

