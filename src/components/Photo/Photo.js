import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Photo extends Component{
    constructor(props) {
        super(props);
        this.goPhotoEdit = this.goPhotoEdit.bind(this);
    }

    goPhotoEdit(id, name,image){
        return this.props.history.push({
            pathname: '/filter',
            data: {id:id, name:name, image:image},
        });
    }

    render() {
        const {id, name, image} = this.props.photo;
        return (
            <div className="col-md-4 col-sm-6 col-12" onClick={() => this.goPhotoEdit(id, name,image)}>
                <div className="card border-secondary mb-3">
                    <div className="image-gallery">

                        <img
                            className="card-img-top"
                            src={image}
                            alt="Card image cap"
                        />
                    </div>
                    <div className="card-footer">
                        {name.replace('originals/', '')}
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(Photo);
