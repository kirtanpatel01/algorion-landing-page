import React from 'react'

function Input(placeholder, label) {
  return (
    <div>
      <label>{label}</label>
      <input type='text' placeholder={placeholder} />
    </div>
  )
}

export default Input