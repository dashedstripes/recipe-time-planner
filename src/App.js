import React, { Component } from 'react';
import IngredientsList from './containers/IngredientsList';
import TargetTime from './containers/TargetTime';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSaved: false,
      ingredients: [],
      targetTime: {}
    }

    this.handleTargetTimeSubmit = this.handleTargetTimeSubmit.bind(this)
    this.handleIngredientsListSave = this.handleIngredientsListSave.bind(this)
  }

  handleTargetTimeSubmit(state, e) {
    this.setState({
      targetTime: state
    })
  }

  handleIngredientsListSave(state, e) {
    this.setState({
      isSaved: true,
      ingredients: state
    })
  }

  render() {
    return (
      <div>
        <IngredientsList
          isSaved={this.state.isSaved}
          onSave={this.handleIngredientsListSave} />
        <br />
        <TargetTime
          isSaved={this.state.isSaved}
          onSubmit={this.handleTargetTimeSubmit} />
      </div>
    );
  }
}

export default App;
