import { Link } from 'react-router-dom'
const CardSearch = ({ show = {} }) => {
  return (
    <Link to={`/${show.id}`} className='text-decoration-none text-body'>
      <div className='card'>
        <img src={show.image && show.image.medium} alt='No existe imagen' className='card-img-top' />
        <div className='card-body'>
          <h5 className='card-title'>{show.name}</h5>
          <p className='m-0'>{show.rating.average}</p>
        </div>
      </div>
    </Link>
  )
}

export default CardSearch
