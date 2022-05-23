import React from 'react'
import Dot from './components/Dot'

const Steps = ({ onChange, questions, questionIndex }) => (
  <nav className="flex items-center justify-center py-4" aria-label="Progress">
    <p className="text-sm font-medium">
      Question {questionIndex + 1} of {questions.length}
    </p>
    <ol role="list" className="ml-8 flex items-center space-x-5">
      {questions.map((_, step) => (
        <li key={`question-${step}`}>
          <Dot step={step} questionIndex={questionIndex} onChange={onChange} />
        </li>
      ))}
    </ol>
  </nav>
)

export default Steps
