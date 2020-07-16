<?php

class Gallery extends Helper
{

	/**
	 * @var string Directory with photos
	 */
    private $directory = 'photos';
	/**
	 * @var int Number of columns in HTML table with thumbnails
	 */
    private $columns;
	/**
	 * @var array Files found in gallery
	 */
	private $files = array();


    public function __construct()
    {
    }

	/**
	 * Loads files from the directory
	 */

    public function load()
    {
        $directory = dir($this->directory);
        while ($item = $directory->read())
        {
			if (strpos($item, '_thumb.'))
			{
				$this->files[] = $item;
			}
        }
        $directory->close();
    }

	public function render()
	{
	    $photos = array();

		foreach ($this->files as $index => $file)
		{
			$thumbnail = $this->baseUrl().$this->directory . '/' . $file;
			$image = $this->baseUrl().$this->directory . '/' . str_replace('_thumb.', '.', $file);
            $photos[$index] = array(
                            'id' => $index,
                            'image' => $image,
                            'thumbnail' => $thumbnail,
                        );
		}
		return json_encode($photos);
	}

}
