// import useGetData from '../hooks/useGetData'

const CardEpisodies = ({ name, season, summary, image }) => {
  return (
    <div className='card mt-4 mx-4  '>
      <img src={image && image.medium} alt='No existe imagen' className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title text-body'>{name}</h5>
        <p className='m-0 text-dark'>Season: {season}</p>
        <p className='m-0'> {summary}</p>

      </div>
    </div>

  )
}

export default CardEpisodies
