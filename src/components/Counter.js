import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Button,
} from 'react-bootstrap';

import { counterActions } from "../actions/postActions";

class Counter extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h3>Counter: {this.props.counter}</h3>

                <Button style={styles.button} onClick={this.props.increment}>INCREMENT</Button>
                <Button style={styles.button} onClick={this.props.incrementAsync}>INCREMENT ASYNC</Button>

                <div style={styles.decrementButtons}>
                    <Button style={styles.button} onClick={this.props.decrement}>DECREMENT</Button>
                    <Button style={styles.button} onClick={this.props.decrementAsync}>DECREMENT ASYNC</Button>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#EFF3F4',
        padding: '20px',
        width: '55%',
        margin: '10px auto',
    },
    button: {
        margin: '0 5px 10px 0',
        width: '30%'
    }
}


const mapStateToProps = state => {
    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
    incrementAsync: () => dispatch(counterActions.incrementAsync()),
    decrementAsync: () => dispatch(counterActions.decrementAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);