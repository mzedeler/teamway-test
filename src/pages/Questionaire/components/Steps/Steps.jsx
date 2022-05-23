import React from 'react'

const _steps = [
  { name: 'Step 1', status: 'complete' },
  { name: 'Step 2', status: 'current' },
  { name: 'Step 3', status: 'upcoming' },
  { name: 'Step 4', status: 'upcoming' },
]

const FinishedDot = ({ step, onChange }) => (
  <a onClick={() => onChange(step)} className="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900">
    <span className="sr-only">Question {step}</span>
  </a>
)

const CurrentDot = ({ step }) => (
  <a className="relative flex items-center justify-center" aria-current="step">
    <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
      <span className="w-full h-full rounded-full bg-indigo-200" />
    </span>
    <span className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
    <span className="sr-only">Question {step}</span>
  </a>
)

const UnfinishedDot = ({ step, onChange, questionIndex }) => (
  <a
    onClick={() => console.log(step, questionIndex) || step == questionIndex + 1 && onChange(step)}
    className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
  >
    <span className="sr-only">Question {step}</span>
  </a>
)

const Dot = ({ step, onChange, questionIndex }) => {
  if (step < questionIndex) {
    return <FinishedDot step={step} onChange={onChange} />
  }

  if (step === questionIndex) {
    return <CurrentDot step={step} />
  }

  return <UnfinishedDot step={i} questionIndex={questionIndex} onChange={onChange} />
}

export default ({ onChange, questions, questionIndex }) => (
  <nav className="flex items-center justify-center py-4" aria-label="Progress">
    <p className="text-sm font-medium">
      Question {questionIndex + 1} of {questions.length}
    </p>
    <ol role="list" className="ml-8 flex items-center space-x-5">
      {questions.map((_, i) => (
        <li key={`question-${i}`}>
          <Dot step={i} questionIndex={questionIndex} onChange={onChange} />
        </li>
      ))}
    </ol>
  </nav>
)
