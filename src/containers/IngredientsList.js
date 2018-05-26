import React, { Component } from 'react'
import { TIMING_TYPES, TIMES, getTimingTypeWord } from '../utils/types'
import generateRecipeTime from '../utils/recipeTime'
import Button from '../components/Button';

import '../css/ingredient-list.css'
import Ingredient from '../components/Ingredient';

// This is what the ingredients data object looks like
// [
//   {
//     id: 1,
//     title: 'Roast Chicken',
//     timings: [
//       {
//         id: 1,
//         type: TIMING_TYPES.PREP,
//         hours: 0,
//         minutes: 20
//       },
//       {
//         id: 2,
//         type: TIMING_TYPES.COOK,
//         hours: 0,
//         minutes: 45
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: 'Mashed Potato',
//     timings: [
//       {
//         id: 1,
//         type: TIMING_TYPES.PREP,
//         hours: 0,
//         minutes: 10
//       },
//       {
//         id: 2,
//         type: TIMING_TYPES.COOK,
//         hours: 0,
//         minutes: 30
//       }
//     ]
//   },
//   {
//     id: 3,
//     title: 'Green Beans',
//     timings: [
//       {
//         id: 1,
//         type: TIMING_TYPES.COOK,
//         hours: 0,
//         minutes: 20
//       }
//     ]
//   },
//   {
//     id: 4,
//     title: 'Peas',
//     timings: [
//       {
//         id: 1,
//         type: TIMING_TYPES.COOK,
//         hours: 0,
//         minutes: 20
//       }
//     ]
//   }
// ]

class IngredientsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ingredients: [],
      target: {
        hour: 7,
        minutes: 30,
        time: TIMES.PM
      },
      plan: []
    }

    this.handleTarget = this.handleTarget.bind(this)
    this.handleAddIngredient = this.handleAddIngredient.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTimingChange = this.handleTimingChange.bind(this)
    this.handleDeleteTiming = this.handleDeleteTiming.bind(this)
    this.handleAddTiming = this.handleAddTiming.bind(this)
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
            id: Date.now(),
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
              // Make sure our timings are always a number
              let value = e.target.value

              if (typeof value === 'string') {
                value = parseInt(e.target.value, 10)
              }

              // If it's not a number, i.e the field is currently blank,
              // cast to a string to avoid errors
              if (isNaN(value)) {
                value = e.target.value.toString()
              }

              timing[e.target.name] = value
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

    // We stringify the state as we need a deep copy of the state
    // unfortunately Object.assign and spread operator only does
    // a shallow copy
    let ingredients = JSON.stringify(this.state.ingredients)
    let target = JSON.stringify(this.state.target)
    let generatedPlan = generateRecipeTime(ingredients, target)

    this.setState({
      plan: generatedPlan
    })

  }

  render() {
    let ingredients = this.state.ingredients.map((ingredient) => (
      <Ingredient
        key={ingredient.id}
        id={ingredient.id}
        title={ingredient.title}
        timings={ingredient.timings}
        onTitleChange={this.handleTitleChange.bind(this, ingredient.id)}
        onDelete={this.handleDeleteIngredient.bind(this, ingredient.id)}
        onTimingChange={this.handleTimingChange}
        onTimingDelete={this.handleDeleteTiming}
        onAddTiming={this.handleAddTiming}
      />
    ))

    let noIngredients = (
      <div>
        <p>No Ingredients.</p>
      </div>
    )

    let recipePlan = this.state.plan.map((time, index) => {
      return (
        <div key={index}>
          <div className='row pb-5'>
            <div className='col-4'>
              <h2>{time.time}</h2>
            </div>
            <div className='col-8'>
              {time.types.map((type, index) => {
                if (type.ingredients.length > 0) {
                  return (
                    <div key={index}>
                      <div className='text-muted'>
                        <strong>{getTimingTypeWord(type.type)}</strong>
                      </div>
                      {type.ingredients.map((ingredient, index) => {
                        return (
                          <div key={index}>
                            {ingredient.title}
                          </div>
                        )
                      })}
                    </div>
                  )
                }
                return null
              })}
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className='row'>
        <div className='col-6'>
          <div className='row'>
            <div className='col-12 border-bottom py-3'>
              <p className='mb-0'>Have you ever struggled when cooking a complicated meal? Juggling multiple ingredients all with different prep and cook times can be a hassle. This app lets you add your ingredients to the panel on the right, set prep and/or cook times for each ingredient, it will then give you a step by step list including timings ending when you wish to serve the meal.</p>
            </div>
            <div className='col-12 py-3 text-center border-bottom'>
              <p>What time would you like to dish up?</p>
              <div className='form-group form-inline justify-content-center'>
                <input className='form-control' type='number' name='hour' min={1} max={12} value={this.state.target.hour} onChange={this.handleTarget} />
                <span>:</span>
                <input className='form-control' type='number' name='minutes' min={0} max={59} value={this.state.target.minutes} onChange={this.handleTarget} />
                <select className='form-control' name='time' value={this.state.target.time} onChange={this.handleTarget}>
                  <option value={TIMES.AM}>AM</option>
                  <option value={TIMES.PM}>PM</option>
                </select>
              </div>
              <div>
                <Button onClick={this.handleSubmit}>VIEW YOUR RECIPE PLAN</Button>
              </div>
            </div>
            <div className='col-12 py-3'>
              {recipePlan}
            </div>
          </div>
        </div>
        <div className='col-6 py-3 border-left ingredient-list'>
          <div className='my-3 text-right'>
            <Button type='primary' onClick={this.handleAddIngredient}>+ ADD AN INGREDIENT</Button>
          </div>
          <div className='py-3'>
            {this.state.ingredients.length > 0 ?
              ingredients :
              noIngredients}
          </div>
        </div>
      </div >
    )
  }
}

export default IngredientsList
