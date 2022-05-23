import React from 'react'
import CurrentDot from './components/CurrentDot'
import FinishedDot from './components/FinishedDot'
import UnfinishedDot from './components/UnfinishedDot'

const Dot = ({ step, onChange, questionIndex }) => {
  if (step < questionIndex) {
    return <FinishedDot step={step} onChange={onChange} />
  }

  if (step === questionIndex) {
    return <CurrentDot step={step} />
  }

  return <UnfinishedDot step={step} questionIndex={questionIndex} onChange={onChange} />
}

export default Dot
