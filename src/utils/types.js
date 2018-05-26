const TIMING_TYPES = {
  PREP: 0,
  COOK: 1
}

const TIMES = {
  AM: 0,
  PM: 1
}

function getTimingTypeWord(timingType) {
  if (timingType === TIMING_TYPES.PREP) {
    return 'Prep'
  }

  if (timingType === TIMING_TYPES.COOK) {
    return 'Cook'
  }
}

module.exports = {
  TIMING_TYPES,
  TIMES,
  getTimingTypeWord
}