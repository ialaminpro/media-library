<?php

require '../../vendor/autoload.php';
use Intervention\Image\ImageManagerStatic as Image;

class ImageManager extends Helper
{
    Private $data;
    Private $img;
    Private $path;
    Private $name;

    public function __construct($data)
    {
        $this->data = $data;
        $this->path = Helper::relatedPath($data->photo->image);
        $this->name = $data->photo->name;
    }

    public function filter($type){
        //greyscale
        if($type=='grayscale')  $this->img->greyscale();

        //invert
        if($type=='invert') $this->img->invert();

        // sepia
        if($type=='sepia') $this->sepia();
    }

    public function sepia(){
        $imagick = new \Imagick(realpath($this->path));
        $imagick->sepiaToneImage(82);
        header("Content-Type: image/jpg");
        $imagick->setImageFormat ("jpeg");
        file_put_contents ('photos/'.$this->getUniqueFileName($this->name), $imagick);
    }


    public function save(){
        try {
            $this->img = Image::make($this->path);
            if (!$this->data->filterEffect || $this->data->filterEffect != 'original') {
                $this->filter($this->data->filterEffect);
            }
            if (isset($this->data->flip->h) && $this->data->flip->h == 0) $this->img->flip('h');

            if (isset($this->data->flip->v) && $this->data->flip->v == 0) $this->img->flip('v');

            if ($this->data->rotate) $this->img->rotate($this->data->rotate);
//
            if ($this->data->brightness) $this->img->brightness($this->data->brightness);
//
//            if ($this->data->highlight) $this->img->brightness($this->data->highlight);
//
//            if ($this->data->exposure) $this->img->brightness($this->data->exposure);
//
//            if ($this->data->contrast) $this->img->contrast($this->data->contrast);

            $this->ratio();

            $this->img->save('photos/' . $this->getUniqueFileName($this->name));

        }catch (Exception $e){
            echo $e->getMessage();
        }
    }

    public function ratio(){

        $width = $this->img->width();
        $height = $this->img->height();
        $newWidth = $width*($this->data->ration/100);
        $newHeight = $height*($this->data->ration/100);

        $this->img->resize($newWidth, $newHeight, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
    }






}
