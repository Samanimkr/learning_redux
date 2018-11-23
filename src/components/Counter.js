import React, { Component } from 'react';
import { connect } from 'react-redux';

import { counterActions } from "../actions/postActions";

class Counter extends Component {
    render() {
        return (
            <div>
                <h2>Counter: {this.props.counter}</h2>
                <button onClick={this.props.increment}>INCREMENT</button>
                <button onClick={this.props.decrement}>DECREMENT</button>
                <div>
                    <button onClick={this.props.incrementAsync}>INCREMENT ASYNC</button>
                    <button onClick={this.props.decrementAsync}>DECREMENT ASYNC</button>
                </div>
            </div>
        )
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