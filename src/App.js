import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    render(){
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
            </div>
            
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(App);