const handleNavigateQuestionPromise = import('./handleNavigateQuestion.mjs')

const questions = [{}, {}, {}]

describe('handleNavigateQuestion', () => {
  let handleNavigateQuestion
  let navigators
  beforeEach(async () => {
    handleNavigateQuestion = (await handleNavigateQuestionPromise).default
    navigators = { questionaire: sinon.spy() }
  })

  it('should navigate to next index', () => {
    const questionIndex = 0
    const nextQuestionIndex = 1

    handleNavigateQuestion({ questions, questionIndex, nextQuestionIndex, navigators})

    assert(navigators.questionaire.calledOnce, 'Navigator called exactly once')
    assert(navigators.questionaire.firstCall.calledWith({ questionIndex: nextQuestionIndex }), 'Navigator called with next index')
  })

  it('should not navigate to negative index', () => {
    const questionIndex = 0
    const nextQuestionIndex = -1

    handleNavigateQuestion({ questions, questionIndex, nextQuestionIndex, navigators})

    assert.isFalse(navigators.questionaire.called, 'Navigator never called')
  })

  it('should not forward skipping an index', () => {
    const questionIndex = 0
    const nextQuestionIndex = 2

    handleNavigateQuestion({ questions, questionIndex, nextQuestionIndex, navigators})

    assert.isFalse(navigators.questionaire.called, 'Navigator never called')
  })
})
