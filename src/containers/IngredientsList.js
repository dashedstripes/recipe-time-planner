import React, { Component } from 'react'
import Button from '../components/Button';
import IngredientTitle from '../components/IngredientTitle';
import IngredientTiming from '../components/IngredientTiming';

const TIMING_TYPES = {
  PREP: 0,
  COOK: 1
}

const TIMES = {
  AM: 0,
  PM: 1
}

const defaultIngredients = [
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

class IngredientsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ingredients: defaultIngredients,
      target: {
        hour: 7,
        minutes: 30,
        time: TIMES.PM
      }
    }

    this.handleTarget = this.handleTarget.bind(this)
    this.handleAddIngredient = this.handleAddIngredient.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTarget(e) {
    this.setState({
      target: { ...this.state.target, [e.target.name]: e.target.value }
    })
  }


  handleAddIngredient() {
    this.setState({
      ingredients: this.state.ingredients.concat({
        id: Date.now(),
        title: '',
        timings: [
          {
            id: 1,
            type: TIMING_TYPES.PREP,
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

  handleTimingChange(ingredientId, timingId, e) {
    this.setState({
      ingredients: this.state.ingredients.map((ingredient) => {
        if (ingredient.id === ingredientId) {
          ingredient.timings.map((timing) => {
            if (timing.id === timingId) {
              timing[e.target.name] = e.target.value
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
            type: TIMING_TYPES.PREP,
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

  handleSubmit() {
    // This is where we send the state to be manupulated and returned to generate a 
    // recipe time plan.
    console.log(this.state)
  }

  render() {
    let ingredients = this.state.ingredients.map((ingredient) => (
      <div key={ingredient.id}>
        <IngredientTitle
          value={ingredient.title}
          onChange={this.handleTitleChange.bind(this, ingredient.id)}
          onDelete={this.handleDeleteIngredient.bind(this, ingredient.id)} />
        {ingredient.timings.map((timing) => (
          <IngredientTiming
            key={timing.id}
            TIMING_TYPES={TIMING_TYPES}
            timingValue={timing.type}
            hoursValue={timing.hours}
            minutesValue={timing.minutes}
            onChange={this.handleTimingChange.bind(this, ingredient.id, timing.id)}
            onDelete={this.handleDeleteTiming.bind(this, ingredient.id, timing.id)}
          />
        ))}
        <div>
          <Button onClick={this.handleAddTiming.bind(this, ingredient.id)}>+ ADD A TIMING</Button>
        </div>
      </div>
    ))

    let noIngredients = (
      <div>
        <p>No Ingredients.</p>
      </div>
    )

    return (
      <div>
        <Button onClick={this.handleAddIngredient}>+ ADD AN INGREDIENT</Button>
        {this.state.ingredients.length > 0 ?
          ingredients :
          noIngredients}
        <div>
          <p>What time would you like to dish up?</p>
          <div>
            <input type='number' name='hour' min={1} max={12} value={this.state.target.hour} onChange={this.handleTarget} />
            <span>:</span>
            <input type='number' name='minutes' min={0} max={59} value={this.state.target.minutes} onChange={this.handleTarget} />
            <select name='time' value={this.state.target.time} onChange={this.handleTarget}>
              <option value={TIMES.AM}>AM</option>
              <option value={TIMES.PM}>PM</option>
            </select>
          </div>
          <div>
            <Button onClick={this.handleSubmit}>GET YOUR PERSONALISED RECIPE PLAN</Button>
          </div>
        </div>
      </div >
    )
  }
}

export default IngredientsList
