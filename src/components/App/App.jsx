import React, { useEffect, useState } from 'react'
import Landing from '../../pages/Landing'
import Questionaire from '../../pages/Questionaire/Questionaire'
import UniversalRouter from 'universal-router/sync'
import { createBrowserHistory } from 'history'
import AnswersContext from '../../contexts/AnswersContext'

const landingDestination = path => ({
  key: 'landing',
  path,
  action: (context, params) => <Landing context={context} params={params} navigators={navigators} />,
  navigator: () => history.push('/')
})

const questionaireDestination = path => ({
  key: 'questionaire',
  path: `${path}/:questionIndex`,
  action: (context, params) => <Questionaire context={context} params={params} navigators={navigators} />,
  navigator: ({ questionIndex = 0 } = {}) => history.push(`${path}/${questionIndex}`)
})

const routes = [
  landingDestination(''),
  questionaireDestination('/question')
]

const navigators = {}
routes.forEach(route => navigators[route.key] = route.navigator)
const router = new UniversalRouter(routes)
const history = createBrowserHistory()

export default function App() {
  const [location, setLocation] = useState(history.location)
  useEffect(() => history.listen(({ location }) => setLocation(location)), [])
  const page = router.resolve(location)
  const [answers, setAnswers] = useState({})
  return <AnswersContext.Provider value={{ answers, setAnswers }}>{page}</AnswersContext.Provider>
 }
