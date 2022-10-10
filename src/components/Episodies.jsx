import useGetData from '../hooks/useGetData'
import CardEpisodies from './CardEpisodies'

const Episodies = ({ id }) => {
  const { data, loading } = useGetData(`https://api.tvmaze.com/shows/${id}/episodes`)
  console.log(data)
  console.log(id)
  return (
    <>
      {
    loading
      ? <p className='text-center text-body'>Cargando</p>
      : data.map((movie, index) => (
        <aside key={index} className=' norow col-12 col-lg-4 col-lg-3  justify-content-center  '>
          <CardEpisodies {...movie} />
        </aside>

      ))
    }
    </>
  )
}

export default Episodies
