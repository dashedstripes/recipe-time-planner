import moment from 'moment'
import { TIMING_TYPES, TIMES } from '../utils/types'

// This is the data object we want to generate from our state
// let idealData = [
//   [
//     {
//       title: 'Roast Chicken',
//       type: TIMING_TYPES.PREP,
//       time: '18:15 PM'
//     },
//     {
//       title: 'Mash Potato',
//       type: TIMING_TYPES.PREP,
//       time: '18:15 PM'
//     }
//   ],
//   [
//     {
//       title: 'Roast Chicken',
//       type: TIMING_TYPES.COOK,
//       time: '18:30 PM'
//     }
//   ]
// ]

let data = []

function getSuffix(value) {
  if (value === TIMES.AM) {
    return 'AM'
  }

  if (value === TIMES.PM) {
    return 'PM'
  }
}

function calculateTime(time, timing) {
  return moment(`${time}`, `h:mm A`)
    .subtract(parseInt(timing.hours, 10), 'hours')
    .subtract(parseInt(timing.minutes, 10), 'minutes')
}

function getTargetTime(target) {
  // Returns a momentjs object from our target time
  return moment(`${target.hour}:${target.minutes}:${getSuffix(target.time)}`, `h:mm A`)
}

function formatTime(time) {
  return time.format(`h:mm A`)
}

function generateRecipeTime({ ingredients, target }) {
  data = []

  ingredients.forEach((ingredient) => {
    // For each ingredient, set the starting target time
    // to that of the user selected target time
    let currentTime = getTargetTime(target)

    // Order the timings so that cook comes before prep
    ingredient.timings.sort((a, b) => a.type - b.type).reverse()

    // Loop through each timing
    ingredient.timings.forEach((timing) => {
      currentTime = calculateTime(formatTime(currentTime), timing)

      data.push({
        title: ingredient.title,
        type: parseInt(timing.type, 10),
        time: formatTime(currentTime)
      })
    })
  })

  // Sort the data array by time so the things that need to be done first are
  // at the start of the array.
  let format = 'h:mm A'
  data.sort((a, b) => {
    if (moment(a.time, format).isBefore(moment(b.time, format))) return -1
    if (moment(b.time, format).isBefore(moment(a.time, format))) return 1
    return 0
  })

  // Return fully sorted and formatted array
  return data
}

export default generateRecipeTime