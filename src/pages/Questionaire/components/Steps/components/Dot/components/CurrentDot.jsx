import React from 'react'

const CurrentDot = ({ step }) => (
  <a className="relative flex items-center justify-center" aria-current="step">
    <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
      <span className="w-full h-full rounded-full bg-indigo-200" />
    </span>
    <span className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
    <span className="sr-only">Question {step}</span>
  </a>
)

export default CurrentDot
