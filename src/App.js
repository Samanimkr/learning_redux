import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from './actions/postActions';
import { AddForm } from "./components/AddForm";

class App extends React.Component {
    handleClick = () => {
        let id = this.props.posts.length;
        this.props.deletePost(id);
    }
    render(){
        console.log(this.props); 
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
                <AddForm />
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
        deletePost: (id) => { dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);