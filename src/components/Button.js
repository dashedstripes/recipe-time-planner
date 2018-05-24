import React from 'react'

const Button = ({ onClick, disabled, children }) => (
  <button disabled={disabled} onClick={onClick}>
    {children}
  </button>
)

export default Button