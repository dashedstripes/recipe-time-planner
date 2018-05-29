import React from 'react'
import { TIMING_TYPES } from '../utils/types'
import Button from './Button'

const IngredientTiming = ({ timingValue, hoursValue, minutesValue, onChange, onDelete }) => (
  <div className='form-group form-inline my-2 justify-content-end'>
    <select className='form-control' value={timingValue} tabIndex='-1' name='type' onChange={onChange}>
      <option value={TIMING_TYPES.PREP}>PREP</option>
      <option value={TIMING_TYPES.COOK}>COOK</option>
    </select>
    <input className='form-control mx-2' type='number' name='hours' value={hoursValue} min={0} max={12} onChange={onChange} />
    <span>HRS</span>
    <input className='form-control mx-2' type='number' name='minutes' value={minutesValue} min={0} max={59} onChange={onChange} />
    <span>MINS</span>
    <Button tabIndex='-1' onClick={onDelete}>
      <i class="fas fa-times-circle"></i>
    </Button>
  </div>
)

export default IngredientTiming