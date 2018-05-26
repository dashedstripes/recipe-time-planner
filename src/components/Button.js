import React from 'react'

const Button = ({ type = 'link', onClick, disabled, children }) => (
  <button className={'btn btn-' + type} disabled={disabled} onClick={onClick}>
    {children}
  </button>
)

export default Button