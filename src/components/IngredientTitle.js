import React from 'react'

const IngredientTitle = ({ value, onChange, onDelete }) => (
  <div>
    <input type='text' autoFocus value={value} onChange={onChange} />
    {/* Set TabIndex to -1 so that tab to change input skips the button */}
    <button tabIndex='-1' onClick={onDelete}>Delete</button>
  </div>
)

export default IngredientTitle