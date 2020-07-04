import React from 'react'

export const Button = ({ text }) => {
  return (
    <div>
      Button Component: {text}
      <button>{text}</button>
    </div>
  )
}
