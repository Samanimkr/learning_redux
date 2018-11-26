import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Button,
    ButtonGroup,
    Badge,
} from 'react-bootstrap';

import { counterActions } from "../actions/postActions";

class Counter extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h2>Counter: {this.props.counter}</h2>

                <ButtonGroup>
                    <Button bsSize="small" onClick={this.props.increment}>
                        INCREMENT <Badge>instantly</Badge>
                    </Button>
                    <Button bsSize="small" onClick={this.props.incrementAsync}>
                        INCREMENT ASYNC <Badge>1 second</Badge>
                    </Button>
                </ButtonGroup>

                <div style={styles.decrementButtons}>
                    <ButtonGroup>
                        <Button bsSize="small" onClick={this.props.decrement}>
                            DECREMENT <Badge>instantly</Badge>
                        </Button>
                        <Button bsSize="small" onClick={this.props.decrementAsync}>
                            DECREMENT ASYNC <Badge>1 second</Badge>
                        </Button>
                    </ButtonGroup>
                </div>
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
    decrementButtons: {
        margin: '10px 0',
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