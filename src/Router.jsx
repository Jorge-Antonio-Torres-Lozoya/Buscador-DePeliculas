import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Movies from './components/Movies'
// import Navbar from './components/Nabvar'
import App from './pages/App'
import Movie from './pages/Movie'

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Movies />} />
          <Route path=':id' element={<Movie />} />
        </Route>
        {/* <Route path='*' element={<p>Página no encontrada</p>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
