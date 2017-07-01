// @flow
import React from 'react'

type PropTypes = {
  label: string,
  className: string,
  handleClick: Function,
}

const Button = ({ label, className, handleClick }: PropTypes) => (
  <button className={className} onClick={handleClick}>
    {label}
  </button>
)

export default Button
