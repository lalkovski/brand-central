import { Header } from 'components/Header'
import AddBrand from 'pages/AddBrand'
import Brands from 'pages/Brands'
import NotFound from 'pages/NotFound/NotFound'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
      <ToastContainer />
    </>
  )
}

export default App
