import React, { Component } from 'react'

const TIMING_TYPES = {
  PREP: 0,
  COOK: 1
}

class IngredientsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ingredients: [
        {
          id: 1,
          title: 'Roast Chicken',
          timings: [
            {
              id: 1,
              type: TIMING_TYPES.PREP,
              hours: 0,
              minutes: 20
            }
          ]
        },
        {
          id: 2,
          title: 'Mashed Potato',
          timings: [
            {
              id: 1,
              type: TIMING_TYPES.PREP,
              hours: 0,
              minutes: 20
            },
            {
              id: 2,
              type: TIMING_TYPES.COOK,
              hours: 1,
              minutes: 10
            }
          ]
        }
      ]
    }

    this.handleAddIngredient = this.handleAddIngredient.bind(this)
  }

  handleAddIngredient() {
    this.setState({
      ingredients: this.state.ingredients.concat({
        id: Date.now(),
        title: '',
        timings: [
          {
            id: 1,
            type: TIMING_TYPES.COOK,
            hours: 0,
            minutes: 20
          }
        ]
      })
    })
  }

  handleTitleChange(id, e) {
    this.setState({
      ingredients: this.state.ingredients.map((ingredient) => {
        if (ingredient.id === id) ingredient.title = e.target.value
        return ingredient
      })
    })
  }

  handleSelectChange(ingredientId, timingId, e) {
    this.setState({
      ingredients: this.state.ingredients.map((ingredient) => {
        if (ingredient.id === ingredientId) {
          ingredient.timings.map((timing) => {
            if (timing.id === timingId) {
              timing.type = e.target.value
            }
            return timing
          })
        }
        return ingredient
      })
    })
  }

  handleHoursChange(ingredientId, timingId, e) {
    this.setState({
      ingredients: this.state.ingredients.map((ingredient) => {
        if (ingredient.id === ingredientId) {
          ingredient.timings.map((timing) => {
            if (timing.id === timingId) {
              timing.hours = e.target.value
            }
            return timing
          })
        }
        return ingredient
      })
    })
  }

  handleMinutesChange(ingredientId, timingId, e) {
    this.setState({
      ingredients: this.state.ingredients.map((ingredient) => {
        if (ingredient.id === ingredientId) {
          ingredient.timings.map((timing) => {
            if (timing.id === timingId) {
              timing.minutes = e.target.value
            }
            return timing
          })
        }
        return ingredient
      })
    })
  }

  handleAddTiming(id, e) {
    this.setState({
      ingredients: this.state.ingredients.map((ingredient) => {
        if (ingredient.id === id) {
          ingredient.timings.push({
            id: Date.now(),
            type: TIMING_TYPES.COOK,
            hours: 0,
            minutes: 20
          })
        }
        return ingredient
      })
    })
  }
  handleDeleteIngredient(id) {
    this.setState({
      ingredients: this.state.ingredients.filter((ingredient) => {
        if (ingredient.id !== id) {
          return ingredient
        }
        return null
      })
    })
  }

  handleDeleteTiming(ingredientId, timingId, e) {
    this.setState({
      ingredients: this.state.ingredients.map((ingredient) => {
        if (ingredient.id === ingredientId) {
          ingredient.timings = ingredient.timings.filter((timing) => {
            if (timing.id !== timingId) return timing
            return null
          })
        }
        return ingredient
      })
    })
  }

  render() {
    let ingredients = this.state.ingredients.map((ingredient) => (
      <div key={ingredient.id}>
        <div>
          <input type='text' autoFocus value={ingredient.title} onChange={this.handleTitleChange.bind(this, ingredient.id)} />
          {/* Set TabIndex to -1 so that tab to change input skips the button */}
          <button tabIndex='-1' onClick={this.handleDeleteIngredient.bind(this, ingredient.id)}>Delete</button>
        </div>
        {ingredient.timings.map((timing) => (
          <div key={timing.id}>
            <select value={timing.type} tabIndex='-1' onChange={this.handleSelectChange.bind(this, ingredient.id, timing.id)}>
              <option value={TIMING_TYPES.PREP}>PREP</option>
              <option value={TIMING_TYPES.COOK}>COOK</option>
            </select>
            <input type='number' value={timing.hours} min={0} max={12} onChange={this.handleHoursChange.bind(this, ingredient.id, timing.id)} />
            <span>HRS</span>
            <input type='number' value={timing.minutes} min={0} max={59} onChange={this.handleMinutesChange.bind(this, ingredient.id, timing.id)} />
            <span>MINS</span>
            <button tabIndex='-1' onClick={this.handleDeleteTiming.bind(this, ingredient.id, timing.id)}>Delete</button>
          </div>
        ))}
        <div>
          <button onClick={this.handleAddTiming.bind(this, ingredient.id)}>+ ADD A TIMING</button>
        </div>
      </div>
    ))

    return (
      <div>
        <button onClick={this.handleAddIngredient}>+ ADD AN INGREDIENT</button>
        {ingredients}
      </div>
    )
  }
}

export default IngredientsList
