
import { useParams } from 'react-router-dom'
import Cast from '../components/Cast'
import Episodies from '../components/Episodies'
import useGetData from '../hooks/useGetData'
const Movie = () => {
  const { id } = useParams()
  const { data, loading } = useGetData(`https://api.tvmaze.com/shows/${id}`)
  console.log(data)
  return (
    <>
      {
loading
  ? <p className='text-center py-2'>Cargando...</p>
  : (
    <>

      <nav class='navbar bg-light '>
        <div class='container-fluid justify-content-between '>
          <a class='navbar-brand text-center mx-2' href='/'>The Movie</a>
          <a class='navbar-brand text-center' href='/'>Home</a>
        </div>
      </nav>
      <div className='card mb-3 mt-4 mx-2 shadow p-3 mb-5 bg-body rounded' style={{ maxWidth: 'max - content' }}>
        <div className='row g-0'>
          <div className='col-md-3 mt-5'>
            <img src={data.image && data.image.medium} className=' img-fluid rounded-start w-100 py-1 px-1 ps-1 ' alt='No existe imagen' />
          </div>
          <div className='col-md-8'>
            <div className='card-body py-4'>
              <h1 className='card-title text-center'>{data.name}</h1>
              <h5 className='card-title py-3'>Rating: {data.rating.average ? data.rating.average : 'No existe rating'}</h5>
              <h5 className='card-title'>Genre: {data.genres[0]}</h5>
              <p className='card-text fs-3 py-3'>{data.summary}</p>
            </div>
          </div>
        </div>
      </div>

      <section className='row gy-4 mb-3'>
        <h1 className=' text-center py-4'>Episodies</h1>
        <Episodies id={id} />
      </section>
      <section className='row gy-4 mb-3 mt-5'>
        <hr className='border border-dark border-1' />
        <h1 className=' text-center  mt-5  '>Cast</h1>
        <Cast id={id} />
      </section>

    </>

    )
}
    </>
  )
}

export default Movie
