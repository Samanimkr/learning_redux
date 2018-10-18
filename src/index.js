import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

const store = createStore();

export class App extends React.Component {
  render(){
    return (
      <h1>Learning Redux</h1>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
