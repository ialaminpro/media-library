import React from 'react';


const UploadImage = () => {

    return (
        <div className="card-footer p-3">
            <div className="row">
                <div className="col-md-3 pt-3 pl-5">
                    <h6>Upload Image</h6>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-6 Drag-image pt-3 text-center">
                    <p><i className="fa fa-dropbox"></i> Drag and Drop<a href="#" style={{textDecoration: 'none'}}> Browse
                        for files</a></p>
                </div>
            </div>
        </div>
    );
};

export default UploadImage;
