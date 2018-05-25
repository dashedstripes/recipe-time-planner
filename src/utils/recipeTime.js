import moment from 'moment'
import { TIMING_TYPES, TIMES } from '../utils/types'

// This is the data object we want to generate from our state
let data = {
  steps: [
    [
      {
        title: 'Roast Chicken',
        type: TIMING_TYPES.PREP,
        time: '18:15 PM'
      },
      {
        title: 'Mash Potato',
        type: TIMING_TYPES.PREP,
        time: '18:15 PM'
      }
    ],
    [
      {
        title: 'Roast Chicken',
        type: TIMING_TYPES.COOK,
        time: '18:30 PM'
      }
    ]
  ]
}

function getSuffix(value) {
  if (value === TIMES.AM) {
    return 'AM'
  }

  if (value === TIMES.PM) {
    return 'PM'
  }
}

function getTime(target, timing) {
  return moment(`${target.hour}:${target.minutes}:${getSuffix(target.time)}`, `h:mm A`)
    .subtract(timing.hours, 'hours')
    .subtract(timing.minutes, 'minutes')
    .format(`h:mm A`)
}

function generateRecipeTime({ ingredients, target }) {
  console.log(
    getTime(
      target,
      ingredients[0].timings[0]
    )
  )
}

export default generateRecipeTime