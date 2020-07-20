<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);



class ImageUploader
{
    Private $exts = array( ".png", ".gif", ".png", ".jpg", ".jpeg" );
    Private $maxSize = 9999999;
    Private $uploadTarget = "photos/originals/";
    Private $originName = "";
    Private $fileName = "";
    Private $tmpName = "";
    public function __construct($originName, $tmpName)
    {
        $this->originName = $originName;
        $this->tmpName = $tmpName;
        $this->fileName = $this->getFileName();

    }

    public function startUpload()
    {
        if( !$this->isWritable() ) die( "Sorry, you must CHMOD your upload target to 777!" );

        if( !$this->checkExt() ) die( "Sorry, you can not upload this filetype!" );

        if( !$this->checkSize() ) die( "Sorry, the file you have attempted to upload is too large!" );

        if( $this->fileExists() ) die( "Sorry, this file already exists on our servers!" );

        if( $this->upload() ) echo "Your file has been uploaded!<br><br>Click <a href=" . $this->uploadTarget .  $this->fileName . ">here</a> to view your file!";

        else  echo "Sorry, your file could not be uploaded for some unknown reason!";
    }

    public function getName(){
        return uniqid() . "-" . time();
    }

    public function getFileName(){

        return $this->getName().$this->getExt();
    }

    public function upload()
    {
       return (move_uploaded_file($this->tmpName, $this->uploadTarget . $this->fileName) ? true : false);
    }

    public function checkSize()
    {
        return ( ( filesize( $this->tmpName ) > $this->maxSize ) ? false : true );
    }

    public function getExt()
    {
        return strtolower( substr( $this->originName, strpos( $this->originName, "." ), strlen( $this->originName ) - 1 ) );
    }

    public function checkExt()
    {
        return ( in_array( $this->getExt(), $this->exts ) ? true : false );
    }

    public function isWritable()
    {
        return ( is_writable( $this->uploadTarget ) );
    }

    public function fileExists()
    {
        return ( file_exists( $this->uploadTarget . time() . $this->fileName ) );
    }

}
