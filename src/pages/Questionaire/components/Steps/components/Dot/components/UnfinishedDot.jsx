import React from 'react'


const UnfinishedDot = ({ step, onChange, questionIndex }) => (
  <a
    onClick={() => console.log(step, questionIndex) || step == questionIndex + 1 && onChange(step)}
    className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
  >
    <span className="sr-only">Question {step}</span>
  </a>
)

export default UnfinishedDot
