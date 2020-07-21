import React from 'react';
import  './../MediaLibrary/MediaLibrary.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import PhotoFilter from "./../Photo/PhotoFilter";
import PhotoAdjust from "./../Photo/PhotoAdjust";
import PhotoCrop from "./PhotoCrop";
import axios from "axios";
import config from "../config";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class PhotoEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: this.props.location.data,
            contrast: 100,
            exposure: 100,
            brightness: '',
            tint: 0,
            saturate: 100,
            shadow: 0,
            highlight: 100,
            warmth: '0',
            flip: {
                'h': 180,
                'v': 180
            },
            ration: 50,
            rotate: '',
            transformFlip:'',
            horizontally:180,
            vertically:180,
            filter: '',
            filterEffect: ""
        }
        this.goPhotoAdjust = this.goPhotoAdjust.bind(this);
        this.goPhotoFilter = this.goPhotoFilter.bind(this);
        this.goPhotoCrop = this.goPhotoCrop.bind(this);
        this.filterChange = this.filterChange.bind(this);
        this.adjust = this.adjust.bind(this);
        this.flip = this.flip.bind(this);
        this.rotate = this.rotate.bind(this);
        this.ratio = this.ratio.bind(this);
        this.savePhoto = this.savePhoto.bind(this);

        toast.configure();
    }
    savePhoto(){

        const formData = new FormData();
        formData.append("data", JSON.stringify(this.state));
        formData.append("api_key", "1234567");
        formData.append("timestamp", (Date.now() / 1000) | 0);

        return axios.post(config.API_SAVE_PHOTO_URL, formData, {
        }).then(response => {
            const data = response.data;
            if(data.status){
                toast.success(data.msg, {position:toast.POSITION.TOP_RIGHT, autoClose: 5000});
                return this.props.history.push({
                    pathname: '/',
                });
            }else{
                toast.error(data.msg, {position:toast.POSITION.TOP_RIGHT, autoClose: 5000});
            }
            //
        }).catch(error => {
            toast.error("Sorry! We could not save!", {position:toast.POSITION.TOP_RIGHT, autoClose: 5000});
        });


    }
    filterChange(name){
        if(name=='original')  this.setState({filterEffect: 'original', filter: 'sepia(0%)'});
        if(name=='greyscale') this.setState({filterEffect: 'grayscale', filter: 'grayscale(100%)'});
        if(name=='sepia')  this.setState({filterEffect: 'sepia', filter: 'sepia(100%)'});
        if(name=='invert')  this.setState({filterEffect: 'invert', filter: 'invert(100%)'});
        if(name=='duotone') this.setState({filterEffect: 'duotone', filter: 'invert(25%) hue-rotate(180deg) grayscale(100%) sepia(75%)  contrast(150%) saturate(300%) hue-rotate(180deg)'});
        if(name=='warm') this.setState({filterEffect: 'warm', filter: 'sepia(50%) contrast(100%) saturate(200%) brightness(100%) hue-rotate(-15deg)'});
        if(name=='cold') this.setState({filterEffect: 'cold', filter: 'hue-rotate(180deg) sepia(75%) contrast(150%) saturate(300%) hue-rotate(180deg)'});
        if(name=='dramatic') this.setState({filterEffect: 'dramatic', filter: 'contrast(150%)'});
    }

    rotate(deg){
        this.setState({rotate: deg, transformFlip: `rotate(${deg}deg)`});
    }

    ratio(percentage){
        this.setState({ration :percentage});
    }

    flip(name){

        if(name=='horizontally') {
            this.setState({ flip : { h : this.state.flip.h, v : 0 }, transformFlip : `rotateX(0deg) rotateY(${this.state.horizontally}deg)`});
            if(!this.state.horizontally) this.setState({ flip : { h : 180 }, horizontally:'180'});
            else this.setState({  flip : { h : 0 }, horizontally: 0})

        }else if(name=='vertically') {
            this.setState({ flip : { h : 0, v : this.state.flip.v }, transformFlip : `rotateY(0deg) rotateX(${this.state.vertically}deg)`});
            if(!this.state.vertically) this.setState({flip : { v : 180 }, vertically:'180'});
            else this.setState({flip : { v : 0 }, vertically: 0})

        }else if(name=='none') {
            this.setState({ flip : { h : 0, v : 0 }, transformFlip : `rotateY(0deg) rotateX(0deg)`});
        }
    }
    adjust(key,value){
        if(key =='contrast') this.setState({contrast:value});
        if(key =='exposure') this.setState({exposure:value});
        if(key =='tint') this.setState({tint:value});
        if(key =='saturate') this.setState({saturate:value});
        if(key =='shadow') this.setState({shadow:value});
        if(key =='highlight') this.setState({highlight:value});
        if(key =='warmth') this.setState({warmth:value});

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
        const { photo, exposure, contrast, saturate, shadow, highlight, warmth, tint, filter,transformFlip, ration } = this.state
        const {id, name, image} = photo;
        const handle  = this.props.match.params.slug

        let style = {
            transform: `${transformFlip}`,
            filter: `brightness(${exposure}%)
                    brightness(${highlight}%)
                    sepia(${tint}%)
                    hue-rotate(${tint}deg)
                    sepia(${warmth}%)
                    hue-rotate(${warmth}deg)
                    contrast(${contrast}%)
                    saturate(${saturate}%)
                    grayscale(${shadow}%)
                    ${filter}`,
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'

        };
        let boxStyle = {
            position: 'relative', paddingBottom: `${ration}%`,
        }
        return (
            <div>
                <div className="main">
                    <div className="col-11 pl-0 pb-3 col-sm-11 col-md-8 m-auto">
                        <h3>{name.replace('originals/', '')}</h3>
                    </div>
                    <div className="col-11 col-sm-11 col-md-8  card-area">
                        <div className="col-md-10 m-auto">
                            <div style={boxStyle} className="top-image">
                                <img style={style} className={`card-img-top cover-img`}  src={image} alt="Card image cap"/>
                            </div>
                        </div>
                        <div className="col-md-10 card-text">
                            <div className="card">
                                <div className="card-body">
                                    <div className="col-md-11 col-11 col-sm-11 button-area">
                                        <div className="d-flex  justify-content-between pt-1">
                                            <a onClick={() => this.goPhotoFilter(id, name,image)} className={`btn btn-light px-3 ${handle=='filter'?'active':''}`}><i className="fa fa-magic"></i> Filter</a>
                                            <a onClick={() => this.goPhotoAdjust(id, name,image)} className={`btn btn-light px-3 ${handle=='adjust'?'active':''}`}><i className="fa fa-adjust"></i> Adjust</a>
                                            <a onClick={() => this.goPhotoCrop(id, name,image)} className={`btn btn-light px-3 ${handle=='crop'?'active':''}`}><i className="fa fa-crop"></i> Crop</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                handle==='filter'?photo?<PhotoFilter action={this.filterChange} key={photo.id} photo={photo}/>:'':
                                handle==='adjust'?photo?<PhotoAdjust action={this.adjust} key={photo.id} photo={photo}/>:'':
                                handle==='crop'?photo?<PhotoCrop action={this.flip}  rotate={this.rotate} ratio={this.ratio} key={photo.id} photo={photo}/>:'':''
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
                            <button type="button" className="btn btn-primary px-5" onClick={() => this.savePhoto()} >Save</button>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default PhotoEdit;
