import React from 'react'
import Button from './Button'
import IngredientTitle from './IngredientTitle'
import IngredientTiming from './IngredientTiming'

const Ingredient = ({ id, title, timings, onTitleChange, onDelete, onTimingChange, onTimingDelete, onAddTiming }) => (
  <div key={id} className='mb-3'>
    <IngredientTitle
      value={title}
      onChange={onTitleChange}
      onDelete={onDelete} />
    <div>
      {timings.map((timing) => (
        <IngredientTiming
          key={timing.id}
          timingValue={timing.type}
          hoursValue={timing.hours}
          minutesValue={timing.minutes}
          onChange={onTimingChange.bind(this, id, timing.id)}
          onDelete={onTimingDelete.bind(this, id, timing.id)}
        />
      ))}
      <div className='text-right'>
        <Button onClick={onAddTiming.bind(this, id)}>+ ADD A TIMING</Button>
      </div>
    </div>
  </div>
)

export default Ingredient