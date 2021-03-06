import React, {useCallback,Component} from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import config from '../config.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UploadImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
        toast.configure();
    }


    handleDrop = files => {
        const uploaders = files.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("api_key", "1234567");
            formData.append("timestamp", (Date.now() / 1000) | 0);

            return axios.post(config.API_UPLOAD_PHOTO_URL, formData, {
                // headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                this.props.action();
                toast.success("Successfully uploaded!", {position:toast.POSITION.TOP_RIGHT, autoClose: 5000});
            }).catch(error => {
                toast.error("Sorry! We could not upload!", {position:toast.POSITION.TOP_RIGHT, autoClose: 5000});
            });
        });

        // Once all the files are uploaded
        axios.all(uploaders).then(() => {
            // ... perform after upload is successful operation
        });
    }
    render() {
    return (

        <div className="card-footer p-3" style={{backgroundColor: 'aliceblue'}}>
            <div className="row">
                <div className="col-md-3 pt-3 pl-5">
                    <h6>Upload Image</h6>
                </div>

                <div className="col-md-2"></div>
                <div className="col-md-6 Drag-image pt-3 text-center">
                    <Dropzone onDrop={this.handleDrop}>
                        {({getRootProps, getInputProps}) => (
                            <section className="container">
                                <div {...getRootProps({className: 'dropzone'})}>
                                    <input {...getInputProps()} />
                                    {
                                        this.state.files && this.state.files.length > 0?<p>Uploading...</p>:<p><i className="fa fa-dropbox"></i> Drag and Drop <span style={{color: 'blue',cursor: 'grabbing'}}>Browse for files</span></p>
                                    }
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>
            </div>
        </div>
    );
    }
};

export default UploadImage;
