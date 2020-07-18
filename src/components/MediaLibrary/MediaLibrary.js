import React from 'react';
import  './MediaLibrary.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import config from '../config.json';
import Photo from '../Photo/Photo';
import UploadImage from "./UploadImage";

class MediaLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
        }
        this.updateGallery = this.updateGallery.bind(this);
    }

    updateGallery(){

        axios
            .get(config.API_GET_GALLERY_URL)
            .then(response => {
                return response;
            })
            .then(json => {

                if (json.status==200) {
                    this.setState({
                        photos: json.data
                    });
                }
            })
            .catch(error => {
            });
    }

    componentDidMount () {
        axios
            .get(config.API_GET_GALLERY_URL)
            .then(response => {
                return response;
            })
            .then(json => {

                if (json.status==200) {
                    this.setState({
                        photos: json.data
                    });
                }
            })
            .catch(error => {
            });
    }

    render() {
        const { photos } = this.state
        return (
            <div>
                <div className="row px-5 py-5">
                    <div className="col-md-12">
                        <h6>9 Items</h6>
                    </div>
                    {
                        photos.map(photo => <Photo
                            key={photo.id}
                            photo={photo}>
                        </Photo>)
                    }


                </div>
                <UploadImage action={this.updateGallery}/>
            </div>


        );

    }
}
export default MediaLibrary;
