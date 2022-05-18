import React from 'react'
import Main from '../../components/Main'
import Page from '../../components/Page'
import Title from '../../components/Title'

export default ({ onNext }) => (
  <Page>
    <Title>Hello</Title>
    <Main>
      <div className="relative bg-gray-800 rounded-lg">
        <div className="rounded-l-lg h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="rounded-l-lg w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
            alt=""
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Personality test tools</h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Take your personality test today!</p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  onClick={onNext}
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Take test
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  </Page>
)
