import React, { Component } from 'react';
import IngredientsList from './containers/IngredientsList';
import './css/style.css'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='border-bottom py-4'>
          <h1 className='h4 mb-0'>
            <img src="/images/logo.png" className="logo" alt="Tymer" />
          </h1>
        </div>
        <IngredientsList />
      </div>
    );
  }
}

export default App;
