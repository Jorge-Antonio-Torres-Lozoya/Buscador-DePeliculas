
const CardCast = ({ person = {}, character = {} }) => {
  return (
    <div className='card mt-4 mx-2 shadow p-3 mb-5 bg-body rounded   '>
      <img src={person.image && person.image.medium} alt='No existe imagen' className='card-img-top size-imageCast  ' />
      <div className='card-body sizeCardBody'>
        <h5 className='card-title text-body'>{person.name}</h5>
        <p className='m-0 text-dark fs-5'>Interpreta a: {character.name}</p>
      </div>
    </div>
  )
}

export default CardCast
