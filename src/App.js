import React, { Component } from 'react';
import IngredientsList from './containers/IngredientsList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}

  }

  render() {
    return (
      <div>
        <IngredientsList />
      </div>
    );
  }
}

export default App;
