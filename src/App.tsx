import { Header } from 'components/Header'
import AddBrand from 'pages/AddBrand'
import Brands from 'pages/Brands'
import NotFound from 'pages/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom'
import ROUTES from 'routing/routes'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.ROOT} element={<Brands />} />
        <Route path={ROUTES.BRAND_ADD} element={<AddBrand />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
