import Navigation from 'components/Header/Header'
import Brands from 'pages/Brands'
import NotFound from 'pages/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom'
import ROUTES from 'routing/routes'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={ROUTES.ROOT} element={<Brands />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
