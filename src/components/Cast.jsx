import useGetData from '../hooks/useGetData'
import CardCast from './CardCast'

const Cast = ({ id }) => {
  const { data, loading } = useGetData(`https://api.tvmaze.com/shows/${id}/cast`)
  console.log(data)
  return (

    <>
      {
    loading
      ? <p className='text-center text-body'>Cargando</p>
      : data.map((movie, index) => (
        <aside key={index} className=' norow col-12 col-md-6 col-lg-3 justify-content-center'>
          <CardCast {...movie} />
        </aside>
      ))
    }
    </>

  )
}

export default Cast
