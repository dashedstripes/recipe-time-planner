import React, { Component } from 'react';
import IngredientsList from './containers/IngredientsList';
import './css/style.css'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='border-bottom py-4'>
          <h1 className='h4 mb-0'>Recipe Time Planner <small>by <a href='https://pateo.co'>pateo</a></small></h1>
        </div>
        <IngredientsList />
      </div>
    );
  }
}

export default App;
