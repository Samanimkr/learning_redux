import React, { Component } from 'react';
import { connect } from 'react-redux';

// Action
import { loginRequest, logoutRequest } from '../actions/loginActions';

import {
    Button,
    FormControl,
    FormGroup,
    Form,
    ControlLabel,
    Label,
} from 'react-bootstrap';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(request, e) {
        e.preventDefault();
        switch (request) {
            case 'login':
                this.props.loginRequest({password: this.state.password});
                break;
            case 'logout':
                this.props.logoutRequest();
                break;
            default:
                break;
        }
    }

    render() {
        const renderStatus = () => {
            if (this.props.loggedIn) {
                return <p style={styles.status}>Status: <Label>Logged In</Label></p>;
            } else {
                return <p style={styles.status}>Status: <Label>Logged out</Label></p>;
            }
        }
        
        const renderButton = () => {
            if (this.props.loggedIn) {
                return <Button onClick={(e) => this.handleSubmit('logout', e)}>Logout</Button>;
            } else {
                return <Button onClick={(e) => this.handleSubmit('login', e)}>Login</Button>;
            }
        }

        return (
            <div style={styles.container}>
                <h3>Login/Logout</h3>
                { renderStatus() }
                <Form>
                    <FormGroup style={{margin: '15px 0'}}>
                        <ControlLabel>Password:</ControlLabel>
                        <FormControl
                            type='password'
                            name='password'
                            placeholder='Enter password...'
                            value={this.state.password}
                            onChange={this.handleChange}
                            style={{margin: '8px 0'}}
                        />

                        { renderButton() }
                    </FormGroup>
                </Form>
                
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
    status: {
        paddingBottom: '15px',
        borderBottom: '1px solid #f0f0f0'
    }
}


const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = dispatch => ({
    loginRequest: password => dispatch(loginRequest(password)),
    logoutRequest: () => dispatch(logoutRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);