import React, { Component } from 'react';
import IngredientsList from './containers/IngredientsList';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='border-bottom py-3'>
          <h1>Recipe Time Planner <small>by <a href='https://pateo.co'>pateo</a></small></h1>
        </div>
        <IngredientsList />
      </div>
    );
  }
}

export default App;
