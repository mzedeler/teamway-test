import React, { useEffect, useState } from 'react'
import Landing from './Landing'

const landingDestination = (path, navigators, history) => ({
  key: 'landing',
  path,
  action: (context, params) => <Landing context={context} params={params} navigators={navigators} />,
  navigator: () => history.push(path)
})

export default landingDestination
