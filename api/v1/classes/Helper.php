<?php


class Helper
{


    public static function getName(){

        return uniqid() . "-" . time();
    }

    public static function getExt($fileName)
    {
        return strtolower( substr( $fileName, strpos( $fileName, "." ), strlen( $fileName ) - 1 ) );
    }

    public function getUniqueFileName($fileName){

        return self::getName().self::getExt($fileName);
    }

    public static function url(){

        if(isset($_SERVER['HTTPS'])){
            $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
        }
        else{
            $protocol = 'http';
        }
        return $protocol . "://" . $_SERVER['HTTP_HOST'];
    }

    public static function baseUrl(){
        return self::url().self::webRoot();
    }

    public static function basePath(){
        $path = str_replace(self::webRoot(),"",$_SERVER['REQUEST_URI']);
        return str_replace("/","",$path);
    }

    public static function webRoot()
    {
        $request_url = $_SERVER['REQUEST_URI'];
        $root = str_replace("\\","/",__DIR__);

        $len1 = strlen($root);
        $len2 = strlen($request_url);

        if ($len1 < $len2) {
            $shortest = $root;
            $longest = $request_url;
            $len_shortest = $len1;
        } else {
            $shortest = $request_url;
            $longest = $root;
            $len_shortest = $len2;
        }

        //check max len
        $pos = strpos($longest, $shortest);
        if($pos !== false) return $shortest;

        for ($i = 1, $j = $len_shortest - 1; $j > 0; --$j, ++$i) {
            for($k = 0; $k <= $i; ++$k){
                $substr = substr($shortest, $k, $j);
                $pos = strpos($longest, $substr);
                if($pos !== false) return $substr;
            }
        }

        return "";
    }

    public static function relatedPath($path){
        return str_replace(self::baseUrl(),"",$path);
    }
}
