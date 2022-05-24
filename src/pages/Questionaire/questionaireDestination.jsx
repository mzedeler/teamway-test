import React from 'react'
import Questionaire from './Questionaire'

const questionaireDestination = (path, navigators, history) => ({
  key: 'questionaire',
  path: `${path}/:questionIndex`,
  action: (context, params) => <Questionaire context={context} params={params} navigators={navigators} />,
  navigator: ({ questionIndex = 0 } = {}) => history.push(`${path}/${questionIndex}`)
})

export default questionaireDestination
