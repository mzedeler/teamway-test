
const handleNavigateQuestion = ({ questions, questionIndex, nextQuestionIndex, navigators }) => {
  if (nextQuestionIndex >= questions.length) {
    navigators.result()
  } else {
    if (nextQuestionIndex >= 0 && nextQuestionIndex <= questionIndex + 1) {
      navigators.questionaire({questionIndex: nextQuestionIndex })
    }
  }
}

export default handleNavigateQuestion
