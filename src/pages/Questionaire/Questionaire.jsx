import React, { useState, useCallback } from 'react'
import Page from '../../components/Page'
import Steps from './components/Steps'
import Question from './components/Question'
import questions from '../../data/questions.json'
import handleNavigateQuestion  from './utils/handleNavigateQuestion'

console.log(handleNavigateQuestion)

export default function Questionaire({ params: { questionIndex: questionIndexStr }, navigators }) {
  const questionIndex = parseInt(questionIndexStr, 10)
  const handleNext = useCallback(
    () => handleNavigateQuestion({
      questions,
      questionIndex,
      navigators,
      nextQuestionIndex: questionIndex + 1,
    }),
    [questionIndex, navigators]
  )

  const handleSetCurrentQuestion = useCallback(
    (nextQuestionIndex) => handleNavigateQuestion({
      questions,
      questionIndex,
      navigators,
      nextQuestionIndex,
    }),
    []
  )

  return (
    <Page>
      <Steps onChange={handleSetCurrentQuestion} questions={questions} questionIndex={questionIndex} />
      <Question onNext={handleNext} question={questions[questionIndex]} />
    </Page>
  )
}
