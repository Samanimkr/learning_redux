import React from 'react';
import { connect } from 'react-redux';
import { newPost } from '../actions/postActions';

import {
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    Form,
} from 'react-bootstrap';

class AddForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            postTitle: '',
            postBody: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        if (e.target.name === 'title') {
            this.setState({postTitle: e.target.value});
        } else if (e.target.name === 'body'){
            this.setState({postBody: e.target.value});
        }
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.newPost({
            title: this.state.postTitle,
            body: this.state.postBody,
        });
    }

    render(){
        return (
            <div style={styles.container}>
                <h3>New Post</h3>
                <Form>
                    <FormGroup>
                        <ControlLabel>Post Title:</ControlLabel>
                        <FormControl
                            type="text"
                            name="title"
                            value={this.state.postTitle}
                            placeholder="Enter title..."
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Post Body:</ControlLabel>
                        <FormControl
                            componentClass="textarea"
                            placeholder="Enter body text..."
                            name="body"
                            value={this.state.postBody}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>ADD POST</Button>
                </Form>
                
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#ecf0f1',
        padding: '20px',
        width: '40%',
        margin: '10px auto',
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        counter: state.counter,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newPost: (data) => dispatch(newPost(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);