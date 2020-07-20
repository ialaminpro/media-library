<?php
//phpinfo();
require '../../../vendor/autoload.php';
//use Intervention\Image\ImageManager;
use Intervention\Image\ImageManagerStatic as Image;

try {


    $imagick = new \Imagick(realpath('photos/originals/5f12d0a422de9-1595068580.png'));
    print_r($imagick);

//    // Start rotate ----
//    // create Image from file
//    $img = Image::make('photos/originals/5f12d0a422de9-1595068580.png');
//    $ratio = 56;
//    $width = $img->width();
//    $height = $img->height();
//    $newWidth = $width*($ratio/100);
//    $newHeight = $height*($ratio/100);
//
//    $img->resize($newWidth, $newHeight, function ($constraint) {
//        $constraint->aspectRatio();
//        $constraint->upsize();
//    });
//    $img->save('photos/5f12d0a422de9-15950685801.png');
    // rotate image 45 degrees clockwise
//    $img->rotate(60);
//    $img->save('photos/5f12d0a422de9-1595068580.png');
    // End rotate ----


}catch (Exception $e){
    echo $e->getMessage();
}
