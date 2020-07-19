import React from 'react';
import { withRouter } from 'react-router-dom';
import  './../MediaLibrary/MediaLibrary.css'
import  './Photo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class PhotoCrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: this.props.photo,
        }
    }

    flip(name){
        this.props.action(name);
    }

    rotate(deg){
        this.props.rotate(deg);
    }

    ratio(percentage){
        this.props.ratio(percentage);
    }

    render() {
        const {id, name, image} = this.state.photo;
        return (
                <div>
                    <div className="col-md-11">
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <button className="btn" style={{backgroudColor:"#ffffff"}}><i className="fa fa-repeat"></i> Flip</button>
                            </div>
                            <div className="col-md-9">
                                <button onClick={() => this.flip('none')} type="button" className="btn btn-outline-primary px-3 mr-2">None</button>
                                <button onClick={() => this.flip('horizontally')} type="button" className="btn btn-outline-secondary mr-2 px-3"><i className="fa fa-shield fa-flip-horizontal"></i> Flip Horizontally</button>
                                <button onClick={() => this.flip('vertically')} type="button" className="btn btn-outline-secondary px-3"><i className="fa fa-shield fa-flip-vertical"></i> Flip Vertically</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-11">
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <button className="btn" style={{backgroudColor:"#ffffff"}}><i className="fa fa-repeat"></i> Rotate</button>
                            </div>
                            <div className="col-md-9">
                                <button onClick={() => this.rotate(0)} type="button" className="btn btn-outline-primary   mr-2">0 deg</button>
                                <button onClick={() => this.rotate(30)} type="button" className="btn btn-outline-secondary mr-2">30 deg</button>
                                <button onClick={() => this.rotate(60)} type="button" className="btn btn-outline-secondary mr-2">60 deg</button>
                                <button onClick={() => this.rotate(90)} type="button" className="btn btn-outline-secondary mr-2">90 deg</button>
                                <button onClick={() => this.rotate(180)} type="button" className="btn btn-outline-secondary ">180 deg</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-11">
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <button className="btn" style={{backgroudColor:"#ffffff"}}><i className="fa fa-repeat"></i> Ratio</button>
                            </div>
                            <div className="col-md-9">
                                <button onClick={() => this.ratio(56.25)} type="button" className="btn btn-outline-secondary mr-2">16:9</button>
                                <button onClick={() => this.ratio(70)} type="button" className="btn btn-outline-secondary mr-2">10:7</button>
                                <button onClick={() => this.ratio(71.14)} type="button" className="btn btn-outline-secondary mr-2">7:5</button>
                                <button onClick={() => this.ratio(75)} type="button" className="btn btn-outline-secondary mr-2">4:3</button>
                                <button onClick={() => this.ratio(60)} type="button" className="btn btn-outline-secondary mr-2">5:3</button>
                                <button onClick={() => this.ratio(66.66)} type="button" className="btn btn-outline-secondary ">3:2</button>

                            </div>
                        </div>
                    </div>
               </div>
        );

    }
}
export default withRouter(PhotoCrop);
