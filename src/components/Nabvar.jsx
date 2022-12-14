import { NavLink } from 'react-router-dom'
import Button from './Button'

const Nabvar = ({ getInput, onChangeLoading, onClickFetch }) => {
  return (
    <nav className='navbar navbar-expand-lg bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>The Movie</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link active' aria-current='page' to='/'>Home</NavLink>
            </li>
          </ul>
          <Button getInput={getInput} onChangeLoading={onChangeLoading} onclickFetch={onClickFetch} />
        </div>
      </div>
    </nav>

  )
}
export default Nabvar
