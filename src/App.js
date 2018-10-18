import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

class App extends React.Component {
  constructor(props){
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }

  render(){
    console.log(this.props);
    return (
      <div>
        <h1>Learning Redux</h1>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
})

const mapActionsToProps = {
  onUpdateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(App);
