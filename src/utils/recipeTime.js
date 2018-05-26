import moment from 'moment'
import { TIMING_TYPES, TIMES } from '../utils/types'

// This is the data object we want to generate from our state
[
  {
    time: '7:45 PM',
    types: [
      {
        title: TIMING_TYPES.PREP,
        ingredients: {
          title: 'Roast Chicken'
        }
      },
      {
        title: TIMING_TYPES.COOK,
        ingredients: {
          title: 'Mashed Potato'
        }
      }
    ]
  },
  {
    time: '8:00 PM',
    types: [
      {
        title: TIMING_TYPES.COOK,
        ingredients: {
          title: 'Green beans'
        }
      }
    ]
  }
]

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

  // Create an array of times, we will then add each ingredient to each time
  // This makes it a bit easier to manage the data in our UI
  let times = data.map((item, index) => {
    return {
      time: item.time,
      types: []
    }
  }).filter((item, index, self) => self.findIndex(t => t.time === item.time) === index)

  // TODO: manipulate times array to match our ideal data source at start of file
  times.forEach((time) => {

  })

  console.log(times)

  // Return fully sorted and formatted array
  return times
}

export default generateRecipeTime