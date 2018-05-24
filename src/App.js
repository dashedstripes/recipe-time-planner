import React, { Component } from 'react';
import IngredientsList from './containers/IngredientsList';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Time Planner <small>by <a href='https://pateo.co'>pateo</a></small></h1>
        </div>
        <div>
          <p>Have you ever struggled when cooking a complicated meal? Juggling multiple ingredients all with different prep and cook times can be a hassle. This app lets you add your ingredients to the panel on the right, set prep and/or cook times for each ingredient, it will then give you a step by step list including timings ending when you wish to serve the meal.</p>
        </div>
        <IngredientsList />
      </div>
    );
  }
}

export default App;
