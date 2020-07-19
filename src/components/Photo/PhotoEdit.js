import React from 'react';
import  './../MediaLibrary/MediaLibrary.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import PhotoFilter from "./../Photo/PhotoFilter";
import PhotoAdjust from "./../Photo/PhotoAdjust";
import PhotoCrop from "./PhotoCrop";

class PhotoEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: this.props.location.data,
            filterVisible: 'original'
        }
        this.goPhotoAdjust = this.goPhotoAdjust.bind(this);
        this.goPhotoFilter = this.goPhotoFilter.bind(this);
        this.goPhotoCrop = this.goPhotoCrop.bind(this);
        this.filterChange = this.filterChange.bind(this);
    }

    filterChange(name){
        this.setState({
            filterVisible: name
        });
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

    componentWillMount() {
        let state = localStorage["appState"];
        if (state) {
            if(!this.state.photo) {
                let AppState = JSON.parse(state);
                this.setState({photo: AppState.photo});
            }else{
                let appState = {
                    photo: this.state.photo
                };
                localStorage["appState"] = JSON.stringify(appState);
            }
        }else{
            let appState = {
                photo: this.state.photo
            };
            localStorage["appState"] = JSON.stringify(appState);
        }
    }
    render() {

        const { photo, filterVisible } = this.state
        const {id, name, image} = photo;
        const handle  = this.props.match.params.slug
        return (
            <div>
                <div className="main">
                    <div className="col-11 pl-0 pb-3 col-sm-11 col-md-8 m-auto">
                        <h3>Breker.jpg</h3>
                    </div>
                    <div className="col-11 col-sm-11 col-md-8  card-area">
                        <div className="col-md-10 m-auto">
                            <div className="top-image">
                                <img className={`card-img-top cover-img ${filterVisible}`}  src={image} alt="Card image cap"/>
                            </div>
                        </div>
                        <div className="col-md-10 card-text">
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-11 col-11 col-sm-11 button-area">
                                        <div className="d-flex  justify-content-between pt-1">
                                            <a onClick={() => this.goPhotoFilter(id, name,image)} className="btn btn-light px-3"><i className="fa fa-magic"></i> Filter</a>
                                            <a onClick={() => this.goPhotoAdjust(id, name,image)} className="btn btn-light px-3"><i className="fa fa-adjust"></i> Adjust</a>
                                            <a onClick={() => this.goPhotoCrop(id, name,image)} className="btn btn-light px-3"><i className="fa fa-crop"></i> Crop</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                handle==='filter'?photo?<PhotoFilter action={this.filterChange} key={photo.id} photo={photo}/>:'':
                                handle==='adjust'?photo?<PhotoAdjust key={photo.id} photo={photo}/>:'':
                                handle==='crop'?photo?<PhotoCrop key={photo.id} photo={photo}/>:'':''
                            }
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="col-11 col-sm-11 col-md-8 m-auto py-3 d-flex justify-content-end">
                        <div className="mr-2">
                            <button onClick={() => this.props.history.goBack()} type="button" className="btn btn-outline-dark px-3">Back</button>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary px-5">Save</button>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default PhotoEdit;
