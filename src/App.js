import React, { Component } from 'react';
import IngredientsList from './containers/IngredientsList';
import TargetTime from './containers/TargetTime';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}

  }

  render() {
    return (
      <div>
        <IngredientsList />
        <br />
        <TargetTime />
      </div>
    );
  }
}

export default App;
