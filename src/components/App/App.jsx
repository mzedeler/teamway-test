import React, { useState, useCallback } from 'react'
import Landing from '../../pages/Landing'
import Questionaire from '../../pages/Questionaire/Questionaire'

const pages = [ Landing, Questionaire ]

export default () => {
  const [pageIndex, setPageIndex] = useState(0)
  const handleNext = useCallback(() => pageIndex < pages.length - 1 && setPageIndex(pageIndex + 1))
  const Page = pages[pageIndex]
 
  console.log(Page)

  return <Page onNext={handleNext} />
 }