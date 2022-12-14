import { Link } from 'react-router-dom'
const Card = ({ name, id, image, rating }) => {
  return (
    <Link to={`/${id}`} className='text-decoration-none text-body'>
      <div className='card sizeCard'>
        <img src={image && image.medium} alt='No existe imagen' className='card-img-top sizeImg' />
        <div className='card-body text-center'>
          <h5 className='card-title'>{name}</h5>
        </div>
      </div>
    </Link>
  )
}

export default Card
