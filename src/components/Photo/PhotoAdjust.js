import React from 'react';
import { withRouter } from 'react-router-dom';
import  './../MediaLibrary/MediaLibrary.css'
import  './Photo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class PhotoAdjust extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: this.props.photo,
        }
    }

    render() {
        const {id, name, image} = this.state.photo;
        return (
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="form">
                        <div className="form-group">
                            <div className="form">
                                <div className="form-group d-flex align-items-center">
                                    <div className="col-md-5">
                                        <i className="fa fa-crop"></i>
                                        <label htmlFor="formControlRange">Exposure</label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="range" className="form-control-range range-width"
                                               id="formControlRange"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <div className="form-group">
                            <div className="form">
                                <div className="form-group d-flex align-items-center">
                                    <div className="col-md-5">
                                        <i className="fa fa-adjust"></i>
                                        <label htmlFor="formControlRange">Tint</label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="range" className="form-control-range range-width"
                                               id="formControlRange"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <div className="form-group">
                            <div className="form">
                                <div className="form-group d-flex align-items-center">
                                    <div className="col-md-5">
                                        <i className="fa fa-crop"></i>
                                        <label htmlFor="formControlRange">Constrast</label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="range" className="form-control-range range-width"
                                               id="formControlRange"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <div className="form-group">
                            <div className="form">
                                <div className="form-group d-flex align-items-center">
                                    <div className="col-md-5">
                                        <i className="fa fa-crop"></i>
                                        <label htmlFor="formControlRange">Highlight</label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="range" className="form-control-range range-width"
                                               id="formControlRange"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <div className="form-group">
                            <div className="form">
                                <div className="form-group d-flex align-items-center">
                                    <div className="col-md-5">
                                        <i className="fa fa-crop"></i>
                                        <label htmlFor="formControlRange">Sasuration</label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="range" className="form-control-range range-width"
                                               id="formControlRange"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <div className="form-group">
                            <div className="form">
                                <div className="form-group d-flex align-items-center">
                                    <div className="col-md-5">
                                        <i className="fa fa-crop"></i>
                                        <label htmlFor="formControlRange">Shadow</label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="range" className="form-control-range range-width"
                                               id="formControlRange"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <div className="form-group">
                            <div className="form">
                                <div className="form-group d-flex align-items-center">
                                    <div className="col-md-5">
                                        <i className="fa fa-crop"></i>
                                        <label htmlFor="formControlRange">Warmth</label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="range" className="form-control-range range-width"
                                               id="formControlRange"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default withRouter(PhotoAdjust);
