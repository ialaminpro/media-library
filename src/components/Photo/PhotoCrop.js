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
            flipSelected: 'none',
            rotateSelected: 0,
            ratioSelected: 56.25
        }
    }

    flip(name){
        this.setState({'flipSelected':name});
        this.props.action(name);
    }

    rotate(deg){
        this.setState({'rotateSelected':deg});
        this.props.rotate(deg);
    }

    ratio(percentage){
        this.setState({'ratioSelected':percentage});
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
                                <button onClick={() => this.flip('none')} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.flipSelected=='none'?'active':''}`}>None</button>
                                <button onClick={() => this.flip('horizontally')} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.flipSelected=='horizontally'?'active':''}`} ><i className="fa fa-shield fa-flip-horizontal"></i> Flip Horizontally</button>
                                <button onClick={() => this.flip('vertically')} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.flipSelected=='vertically'?'active':''}`}><i className="fa fa-shield fa-flip-vertical"></i> Flip Vertically</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-11">
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <button className="btn" style={{backgroudColor:"#ffffff"}}><i className="fa fa-repeat"></i> Rotate</button>
                            </div>
                            <div className="col-md-9">
                                <button onClick={() => this.rotate(0)} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.rotateSelected==0?'active':''}`}>0 deg</button>
                                <button onClick={() => this.rotate(30)} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.rotateSelected==30?'active':''}`}>30 deg</button>
                                <button onClick={() => this.rotate(60)} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.rotateSelected==60?'active':''}`}>60 deg</button>
                                <button onClick={() => this.rotate(90)} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.rotateSelected==90?'active':''}`}>90 deg</button>
                                <button onClick={() => this.rotate(180)} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.rotateSelected==180?'active':''}`}>180 deg</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-11">
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <button className="btn" style={{backgroudColor:"#ffffff"}}><i className="fa fa-repeat"></i> Ratio</button>
                            </div>
                            <div className="col-md-9">
                                <button onClick={() => this.ratio(56.25)} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.ratioSelected==56.25?'active':''}`}>16:9</button>
                                <button onClick={() => this.ratio(70)} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.ratioSelected==70?'active':''}`}>10:7</button>
                                <button onClick={() => this.ratio(71.14)} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.ratioSelected==71.14?'active':''}`}>7:5</button>
                                <button onClick={() => this.ratio(75)} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.ratioSelected==75?'active':''}`}>4:3</button>
                                <button onClick={() => this.ratio(60)} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.ratioSelected==60?'active':''}`}>5:3</button>
                                <button onClick={() => this.ratio(66.66)} type="button" className={`btn btn-outline-secondary mr-2 px-3 ${this.state.ratioSelected==66.66?'active':''}`}>3:2</button>

                            </div>
                        </div>
                    </div>
               </div>
        );

    }
}
export default withRouter(PhotoCrop);
