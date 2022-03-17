import React from 'react'

const Button = (props) => {
  return (
    <input
    className='btn'
      type="button"
      value={props.label}
    />
  )
}

export default Button