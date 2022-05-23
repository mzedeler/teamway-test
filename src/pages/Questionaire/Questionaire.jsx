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

export default function Questionaire({ params: { questionIndex }, navigators }) {
  const handleNext = useCallback(
    () => questionIndex < questions.length -1 && setCurrentQuestion(questionIndex + 1),
    [questionIndex]
  )

  const handleSetCurrentQuestion = useCallback(
    (i) => console.log(i) || i >= 0 && i < questions.length && navigators.questionaire({ questionIndex: i }),
    []
  )

  return (
    <Page>
      <Steps type="Question" onChange={handleSetCurrentQuestion} />
      <Question />
    </Page>
  )
}
