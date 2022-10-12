import { useState } from 'react'
const Button = ({ getInput, onclickFetch, onChangeLoading }) => {
  const [inputSearch, setInputSearch] = useState('')

  const onClick = (inputSearch) => {
    getInput({ inputSearch })
    onclickFetch(true)
    onChangeLoading(false)
  }

  return (
    <>
      <form className='d-flex' role='search'>
        <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
        <button onClick={() => onClick(inputSearch)} className='btn btn-outline-success' type='button'>Search</button>

      </form>
    </>
  )
}
export default Button
