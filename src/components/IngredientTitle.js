import React from 'react'
import Button from './Button'

const IngredientTitle = ({ value, onChange, onDelete }) => (
  <div className='input-group'>
    <input type='text' className='form-control' autoFocus value={value} onChange={onChange} />
    <div class="input-group-append">
      <Button tabIndex='-1' type='outline-danger' onClick={onDelete}>Delete</Button>
    </div>
  </div>
)

export default IngredientTitle