import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Button,
    Image,
    FormControl,
    FormGroup
} from 'react-bootstrap';

import { requestNasaImages } from "../actions/postActions";

class ApiComponent extends Component {
    componentDidMount() {
        this.props.requestNasaImages({
            planetName: this.state.planetName,
        });
    }
    constructor(props){
        super(props);

        this.state = {
            planetName: 'Earth',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({planetName: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.requestNasaImages({
            planetName: this.state.planetName,
        });
    }

    render() {
        return (
            <div style={styles.container}>
                <h3>API Calls</h3>
                <FormGroup style={styles.formContainer}>
                    <FormControl
                        style={styles.input}
                        type="text"
                        value={this.state.postTitle}
                        defaultValue='Earth'
                        placeholder="Enter Planet Name"
                        onChange={this.handleChange}
                    />
                    <Button style={styles.button} onClick={this.handleSubmit}>Search Nasa API</Button>
                </FormGroup>

                
                <div style={styles.imagesContainer}>
                    { this.props.images &&
                        this.props.images.map((image, index) => (
                            // <p>{image}</p>
                            <Image style={styles.image} key={index} src={image.uri} responsive />
                        ))
                    }
                </div>
            </div>
        )
    }
}


const styles = {
    container: {
        backgroundColor: '#f7fafa',
        padding: '20px',
        width: '55%',
        margin: '10px auto',
    },
    imagesContainer: {
        display: 'flex',
        margin: '10px 0',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    image: {
        flex: '1 0 19%',
        height: '120px',
        margin: '0 3px 3px 0'
    },
    formContainer: {
        display: 'flex',
    },
    button: {
        flex: '1 0 25%',
        margin: '0 0 0 10px',
    },
    input: {
        flex: '1 0 65%',
        display: 'inline-block'
    }
}


const mapStateToProps = state => {
    return {
        images: state.images
    }
}

const mapDispatchToProps = dispatch => ({
    requestNasaImages: planet => dispatch(requestNasaImages(planet))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApiComponent);