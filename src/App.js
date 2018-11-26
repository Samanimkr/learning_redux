import React from 'react';
import { connect } from 'react-redux';

// Actions
import { deletePost } from './actions/postActions';

// Components
import AddForm from "./components/AddForm";
import Counter from "./components/Counter";

import {
    Button,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap';

class App extends React.Component {
    handleClick = () => {
        let id = this.props.posts.length;
        this.props.deletePost(id);
    }
    
    render() {
        const posts = this.props.posts;
        return (
            <div>
                <div style={styles.container}>
                    <h1>POSTS:</h1>
                    <ul>
                        { posts.map(post => {
                            return (
                                <FormGroup key={post.id}>
                                    <ControlLabel>{post.title}</ControlLabel>
                                    <FormControl.Static>{post.body}</FormControl.Static>
                                </FormGroup>
                               
                            )
                        }) }
                    </ul>
                    <Button onClick={this.handleClick.bind(this)}>Delete latest post</Button>
                </div>
                
                <AddForm
                    submitForm={(data) => this.props.newPost(data)}
                />
                <Counter />
            </div>
            
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#f3f3f3',
        padding: '20px',
        width: '40%',
        margin: '10px auto',
    },
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);