import React, { useState, useCallback } from 'react'
import Page from '../../components/Page'
import Steps from './components/Steps'
import Question from './components/Question'
import questions from '../../data/questions.json'

console.log(questions)

export default function Questionaire({ params: { questionIndex: questionIndexStr }, navigators }) {
  const questionIndex = parseInt(questionIndexStr, 10)
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
      <Steps type="Question" onChange={handleSetCurrentQuestion} questions={questions} questionIndex={questionIndex} />
      <Question />
    </Page>
  )
}
