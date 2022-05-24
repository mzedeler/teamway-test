import React, { useEffect, useState } from 'react'
import Questionaire from '../../pages/Questionaire'
import Result from '../../pages/Result'
import UniversalRouter from 'universal-router/sync'
import { createBrowserHistory } from 'history'
import AnswersContext from '../../contexts/AnswersContext'
import landingDestination from '../../pages/Landing/landingDestination'
import questionaireDestination from '../../pages/Questionaire/questionaireDestination'
import resultDestination from '../../pages/Result/resultDestination'

const history = createBrowserHistory()

const navigators = {}

const routes = [
  landingDestination('', navigators, history),
  questionaireDestination('/question', navigators, history),
  resultDestination('/result', navigators, history),
]

routes.forEach(route => navigators[route.key] = route.navigator)
const router = new UniversalRouter(routes)

export default function App() {
  const [location, setLocation] = useState(history.location)
  useEffect(() => history.listen(({ location }) => setLocation(location)), [])
  const page = router.resolve(location)
  const [answers, setAnswers] = useState({})
  return <AnswersContext.Provider value={{ answers, setAnswers }}>{page}</AnswersContext.Provider>
 }
