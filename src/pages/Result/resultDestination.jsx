import React from 'react'
import Result from './Result'

const resultDestination = (path, navigators, history) => ({
  key: 'result',
  path,
  action: (context, params) => <Result context={context} params={params} navigators={navigators} />,
  navigator: () => history.push(path)
})

export default resultDestination
