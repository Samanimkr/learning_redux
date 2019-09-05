import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Button,
    ProgressBar
} from 'react-bootstrap';

import { startTask, stopTask } from '../actions/taskActions';

class CancelTask extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h3>Cancelling a task</h3>
                { this.props.isRunningTask &&
                    <ProgressBar active now={100}/>
                }
                <Button bsStyle="success" onClick={this.props.startTask}>Start Task</Button>
                <Button bsStyle="danger" onClick={this.props.stopTask}>Stop Task</Button>
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
}


const mapStateToProps = state => {
    return {
        isRunningTask: state.isRunningTask
    }
}

const mapDispatchToProps = dispatch => ({
    startTask: () => dispatch(startTask()),
    stopTask: () => dispatch(stopTask()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CancelTask);