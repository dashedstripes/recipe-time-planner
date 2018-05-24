import React, { Component } from 'react';
import IngredientsList from './containers/IngredientsList';
import TargetTime from './containers/TargetTime';

class App extends Component {
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
