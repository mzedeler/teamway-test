import React, { useState, useCallback } from 'react'
import Page from '../../components/Page'
import Steps from './components/Steps'
import Question from './components/Question'
import questions from '../../data/questions.json'

const handleNavigateQuestion = ({ questionIndex, nextQuestionIndex, navigators }) => {
  if (nextQuestionIndex >= questions.length) {
    // Move to result page
  } else {
    if (nextQuestionIndex >= -1 && nextQuestionIndex <= questionIndex + 1) {
      navigators.questionaire({questionIndex: nextQuestionIndex })
    }
  }
}

export default function Questionaire({ params: { questionIndex: questionIndexStr }, navigators }) {
  const questionIndex = parseInt(questionIndexStr, 10)
  const handleNext = useCallback(
    () => handleNavigateQuestion({
      questionIndex,
      navigators,
      nextQuestionIndex: questionIndex + 1,
    }),
    [questionIndex, navigators]
  )

  const handleSetCurrentQuestion = useCallback(
    (nextQuestionIndex) => handleNavigateQuestion({
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
