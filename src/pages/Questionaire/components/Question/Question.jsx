import React, { useContext } from 'react'
import Card from '../../../../components/Card'
import AnswersContext from '../../../../contexts/AnswersContext'

const notificationMethods = [
  { id: 'email', title: 'Email' },
  { id: 'sms', title: 'Phone (SMS)' },
  { id: 'push', title: 'Push notification' },
]

const Question = ({ onNext, question }) => {
  const { answers, setAnswers } = useContext(AnswersContext)

  const handleSetAnswer = (index) => setAnswers({...answers, [question.id]: index })

  return (
    <Card>
      <div>
        <label className="text-base font-medium text-gray-900">{question.question}</label>
        <fieldset className="mt-4">
          <legend className="sr-only">Answers</legend>
          <div className="space-y-4">
            {question.answers.map((answer) => (
              <div key={answer.index} className="flex items-center">
                <input
                  id={answer.index}
                  checked={answers[question.id] === answer.index}
                  onChange={() => handleSetAnswer(answer.index)}
                  name="answer"
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label htmlFor={answer.index} className="ml-3 block text-sm font-medium text-gray-700">
                  {answer.text}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <div className="mt-4">
          <div className="inline-flex rounded-md shadow">
            <a
              onClick={(e) => { e.preventDefault(); onNext() }}
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Question
