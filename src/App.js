import React from 'react';
import { connect } from 'react-redux';

// Actions
import { deletePost } from './actions/postActions';

// Components
import AddForm from './components/AddForm';
import Counter from './components/Counter';
import ApiComponent from './components/ApiComponent';
import Login from './components/Login';

import {
    Button,
    FormGroup,
    ControlLabel,
    FormControl,
    PageHeader,
    Alert
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
                <PageHeader style={{paddingLeft: '15px'}}>Learning Redux <small>& Sagas and Persist</small></PageHeader>;
                <div style={styles.container}>
                    <h3>Posts</h3>

                    {this.props.showCongratulations && 
                        <Alert bsStyle='success'>
                            <strong>Congratulations!</strong> You have created your first 3 posts.
                        </Alert>
                    }
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
                
                <AddForm submitForm={data => this.props.newPost(data)} />
                <ApiComponent />
                <Counter />
                <Login />
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
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts,
        showCongratulations: state.showCongratulations,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);