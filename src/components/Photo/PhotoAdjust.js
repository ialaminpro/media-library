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
            contrast: '',
            exposure: '',
            tint: '',
            saturate: '',
            shadow: '',
            highlight: '',
            warmth: '',
        }
        this.adjustContrast = this.adjustContrast.bind(this)
        this.adjustExposure = this.adjustExposure.bind(this)
        this.adjustTint = this.adjustTint.bind(this)
        this.adjustSaturate = this.adjustSaturate.bind(this)
        this.adjustShadow = this.adjustShadow.bind(this)
        this.adjustHighlight = this.adjustHighlight.bind(this)
        this.adjustWarmth = this.adjustWarmth.bind(this)
    }

    adjustWarmth(e) {
        this.setState({warmth: e.target.value});
        this.props.action('warmth',e.target.value);
    }
    adjustHighlight(e) {
        this.setState({highlight: e.target.value});
        this.props.action('highlight',e.target.value);
    }
    adjustSaturate(e) {
        this.setState({saturate: e.target.value});
        this.props.action('saturate',e.target.value);
    }

    adjustShadow(e) {
        this.setState({shadow: e.target.value});
        this.props.action('shadow',e.target.value);
    }

    adjustTint(e) {
        this.setState({tint: e.target.value});
        this.props.action('tint',e.target.value);
    }

    adjustExposure(e) {
        this.setState({exposure: e.target.value});
        this.props.action('exposure',e.target.value);
    }

    adjustContrast(e) {
        this.setState({contrast: e.target.value});
        this.props.action('contrast',e.target.value);
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
                                        <input type="range"
                                               min="0" max="100"
                                               className="form-control-range range-width"
                                               value={this.state.exposure}
                                               onChange={this.adjustExposure} />
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
                                        <input type="range"
                                               min="0" max="90"
                                               className="form-control-range range-width"
                                               value={this.state.tint}
                                               onChange={this.adjustTint} />
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
                                        <label htmlFor="formControlRange">Contrast</label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="range"
                                               min="0" max="100"
                                               className="form-control-range range-width"
                                               value={this.state.contrast}
                                               onChange={this.adjustContrast} />
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
                                        <input type="range"
                                               min="0" max="100"
                                               className="form-control-range range-width"
                                               value={this.state.highlight}
                                               onChange={this.adjustHighlight} />
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
                                        <label htmlFor="formControlRange">Saturation</label>
                                    </div>
                                    <div className="col-md-7">
                                        <input type="range"
                                               min="0" max="100"
                                               className="form-control-range range-width"
                                               value={this.state.saturate}
                                               onChange={this.adjustSaturate} />
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
                                            <input type="range"
                                                   min="0" max="100"
                                                   className="form-control-range range-width"
                                                   value={this.state.shadow}
                                                   onChange={this.adjustShadow} />
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
                                        <input type="range"
                                               min="0" max="50"
                                               className="form-control-range range-width"
                                               value={this.state.warmth}
                                               onChange={this.adjustWarmth} />
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
