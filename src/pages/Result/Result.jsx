import React, { useContext } from 'react'
import AnswersContext from '../../contexts/AnswersContext'
import Main from '../../components/Main'
import Page from '../../components/Page'
import Title from '../../components/Title'

export default function Landing({ navigators }) {
  const { answers } = useContext(AnswersContext)

  return (
    <Page>
      <Main>
        <div className="relative bg-gray-800 rounded-lg">
          <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="md:pl-10">
              <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Personality test tools</h2>
              <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Test results!</p>
              <pre className="mt-2 text-white font-extrabold tracking-tight">{JSON.stringify(answers, null, 2)}</pre>
            </div>
          </div>
        </div>
      </Main>
    </Page>
  )
  }
