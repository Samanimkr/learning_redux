import React from 'react';
import { connect } from 'react-redux';

// Actions
import { deletePost } from './actions/postActions';

// Components
import AddForm from "./components/AddForm";

class App extends React.Component {
    handleClick = () => {
        let id = this.props.posts.length;
        this.props.deletePost(id);
    }
    
    render() {
        const posts = this.props.posts;
        return (
            <div>
                <h1>POSTS:</h1>
                <ul>
                    { posts.map(post => {
                        return (
                            <li key={post.id}>Title: '{post.title}', Body: '{post.body}'</li>
                        )
                    }) }
                </ul>
                <button onClick={this.handleClick.bind(this)}>Delete latest post</button>
                <AddForm
                    submitForm={(data) => this.props.newPost(data)}
                />
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
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);