import React, { useCallback, useEffect, useRef, useState } from 'react'
import Landing from '../../pages/Landing'
import Questionaire from '../../pages/Questionaire/Questionaire'
import UniversalRouter from 'universal-router/sync'
import { createBrowserHistory } from 'history'

const landingDestination = path => ({ path, action: (...props) => <Landing {...props}/>, go: () => history.push('/') })
const questionaireDestination = path => ({ path: `$(path}/$questionId`, action: (...props) => <div>Hello<Questionaire {...props} /></div>, go: (questionId) => history.push(`/${path}/${questionId}`) })
// 
const routes = [
  landingDestination(''),
  questionaireDestination('/question')
]

const pages = [ Landing, Questionaire ]

const router = new UniversalRouter(routes)
const history = createBrowserHistory()

export default () => {
  useEffect(() => { console.log(router.resolve(history.location)) }, [] )
  useEffect(() => history.listen(location => console.log(location)), [])
  const [pageIndex, setPageIndex] = useState(0)
  const handleNext = useCallback((e) => {
    e.preventDefault()
    pageIndex < pages.length - 1 && setPageIndex(pageIndex + 1)
  }, [])
  const Page = pages[pageIndex]
 
  console.log(Page)

  return router.resolve(history.location)

  // return <Page onNext={handleNext} />
 }