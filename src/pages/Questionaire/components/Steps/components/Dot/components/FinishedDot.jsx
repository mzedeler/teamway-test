import React from 'react'

const FinishedDot = ({ step, onChange }) => (
  <a onClick={() => onChange(step)} className="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900">
    <span className="sr-only">Question {step}</span>
  </a>
)

export default FinishedDot
