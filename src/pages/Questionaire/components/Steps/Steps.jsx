import React from 'react'

const _steps = [
  { name: 'Step 1', status: 'complete' },
  { name: 'Step 2', status: 'current' },
  { name: 'Step 3', status: 'upcoming' },
  { name: 'Step 4', status: 'upcoming' },
]

export default ({ steps = _steps, type, onChange }) => (
  <nav className="flex items-center justify-center py-4" aria-label="Progress">
    <p className="text-sm font-medium">
      {type} {steps.findIndex((step) => step.status === 'current') + 1} of {steps.length}
    </p>
    <ol role="list" className="ml-8 flex items-center space-x-5">
      {steps.map((step, i) => (
        <li key={step.name}>
          {step.status === 'complete' ? (
            <a onClick={() => onChange(i)} className="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900">
              <span className="sr-only">{step.name}</span>
            </a>
          ) : step.status === 'current' ? (
            <a onClick={() => onChange(i)} className="relative flex items-center justify-center" aria-current="step">
              <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
                <span className="w-full h-full rounded-full bg-indigo-200" />
              </span>
              <span className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
              <span className="sr-only">{step.name}</span>
            </a>
          ) : (
            <a onClick={() => onChange(i)} className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
              <span className="sr-only">{step.name}</span>
            </a>
          )}
        </li>
      ))}
    </ol>
  </nav>
)
