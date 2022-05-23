import React, { useState, useCallback } from 'react'
import Page from '../../components/Page'
import Steps from './components/Steps'
import Question from './components/Question'
import questions from '../../data/questions.json'

const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]

export default ({ onNext }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const handleNext = useCallback(
    () => currentQuestion < questions.length -1 && setCurrentQuestion(currentQuestion + 1),
    [currentQuestion]
  )
  const handleSetCurrentQuestion = useCallback(
    (i) => console.log(i) || i >= 0 && i < questions.length && setCurrentQuestion(i),
    []
  )
  return (
    <Page>
      <Steps type="Question" onChange={handleSetCurrentQuestion} />
      <Question />
    </Page>
  )
}
