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

    effectChange(name){
        this.props.action(name);
    }

    render() {
        const {id, name, image} = this.state.photo;
        return (

            <div className="row">
                <div className="col-md-3 col-sm-6 col-12 gallery" onClick={() => this.effectChange('original')}>
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top original" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Original</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery" onClick={() => this.effectChange('greyscale')}>
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top greyscale" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Greyscale</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery" onClick={() => this.effectChange('sepia')}>
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top sepia" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Sepia</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery" onClick={() => this.effectChange('invert')}>
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top invert" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Invert</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery" onClick={() => this.effectChange('duotone')}>
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top duotone" src={image} alt="Card image cap"/>

                        </div>
                        <div className=" text-center">
                            <p>Duotone</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery" onClick={() => this.effectChange('warm')}>
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top warm" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Warm</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery" onClick={() => this.effectChange('cold')}>
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top cold" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Cool</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12 gallery" onClick={() => this.effectChange('dramatic')}>
                    <div className="card">
                        <div className="image-gallery">
                            <img className="card-img-top dramatic" src={image} alt="Card image cap"/>
                        </div>
                        <div className=" text-center">
                            <p>Dramatic</p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default withRouter(PhotoFilter);
