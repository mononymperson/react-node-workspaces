import { Route, Routes } from 'react-router-dom'

import { Home } from '../views/home'

export const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  )
}
