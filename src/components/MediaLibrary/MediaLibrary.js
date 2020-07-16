import React from 'react';
import  './MediaLibrary.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import config from '../config.json';
import Photo from '../Photo/Photo';

class MediaLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
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

        );

    }
}
export default MediaLibrary;
