import React from 'react';
import { Link } from 'react-router-dom';

const Photo = (props) => {
    const { id,image, thumbnail } = props.photo;
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="card border-secondary mb-3">
                <div className="image-gallery">


                    <img
                        className="card-img-top"
                        src={thumbnail}
                        alt="Card image cap"
                    />
                </div>
                <div className="card-footer">
                    img.jpg
                </div>
            </div>
        </div>
    );
};

export default Photo;
