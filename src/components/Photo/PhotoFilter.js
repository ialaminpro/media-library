import React from 'react';
import { withRouter } from 'react-router-dom';
import  './../MediaLibrary/MediaLibrary.css'
import  './Photo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class PhotoFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: this.props.photo,
        }
        this.goPhotoAdjust = this.goPhotoAdjust.bind(this);
        this.goPhotoFilter = this.goPhotoFilter.bind(this);
        this.goPhotoCrop = this.goPhotoCrop.bind(this);
    }

    goPhotoCrop(id, name,image){
        return this.props.history.push({
            pathname: '/crop',
            data: {id:id, name:name, image:image},
        });
    }
    goPhotoAdjust(id, name,image){
        return this.props.history.push({
            pathname: '/adjust',
            data: {id:id, name:name, image:image},
        });
    }
    goPhotoFilter(id, name,image){
        return this.props.history.push({
            pathname: '/filter',
            data: {id:id, name:name, image:image},
        });
    }

    render() {
        const {id, name, image} = this.state.photo;
        return (

            <div className="row">
                <div className="col-md-3 col-sm-6 col-12 gallery">
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Original</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery">
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Original</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery">
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Original</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery">
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Original</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery">
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Original</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery">
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Original</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery">
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Original</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery">
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Original</p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default withRouter(PhotoFilter);
