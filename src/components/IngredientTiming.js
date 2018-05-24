import React from 'react'
import Button from './Button'

const IngredientTiming = ({ TIMING_TYPES, timingValue, hoursValue, minutesValue, onChange, onDelete }) => (
  <div>
    <select value={timingValue} tabIndex='-1' name='type' onChange={onChange}>
      <option value={TIMING_TYPES.PREP}>PREP</option>
      <option value={TIMING_TYPES.COOK}>COOK</option>
    </select>
    <input type='number' name='hours' value={hoursValue} min={0} max={12} onChange={onChange} />
    <span>HRS</span>
    <input type='number' name='minutes' value={minutesValue} min={0} max={59} onChange={onChange} />
    <span>MINS</span>
    <Button tabIndex='-1' onClick={onDelete}>Delete</Button>
  </div>
)

export default IngredientTiming