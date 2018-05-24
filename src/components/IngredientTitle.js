import React from 'react'
import Button from './Button'

const IngredientTitle = ({ value, onChange, onDelete }) => (
  <div>
    <input type='text' autoFocus value={value} onChange={onChange} />
    <Button tabIndex='-1' onClick={onDelete}>Delete</Button>
  </div>
)

export default IngredientTitle