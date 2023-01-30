import { BrowserRouter } from 'react-router-dom'

import { Body } from '../layouts/body'

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <Body></Body>
    </BrowserRouter>
  )
}
