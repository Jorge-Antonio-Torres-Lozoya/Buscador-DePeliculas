import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'
import App from './pages/App'
import Movie from './pages/Movie'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Movies />} />
          <Route path=':id' element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
