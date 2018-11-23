import React from 'react';
import { connect } from 'react-redux';
import { newPost } from '../actions/postActions';

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
            <div>
                <h3>New Post</h3>
                <ul>
                    <li>
                        <label>Title:</label>
                        <input type='text' name='title' onChange={this.handleChange}/>
                    </li>
                    <li>
                        <label>Body:</label>
                        <input type='text' name='body' onChange={this.handleChange}/>
                    </li>
                </ul>
                
                <input type="submit" value="Add post" onClick={this.handleSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newPost: (data) => dispatch(newPost(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);