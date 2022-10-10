
import axios from 'axios'
import { useState } from 'react'
import useGetData from '../hooks/useGetData'
import Card from './Card'
import CardSearch from './CardSearch'
import Nabvar from './Nabvar'

const Movies = () => {
  const [input, setInput] = useState()
  const [onClickButton, setOnClickButton] = useState()
  const [items, setItems] = useState([])
  // const [dataLength, setDataLength] = useState('a')
  const [isLoading, setIsLoading] = useState(true)
  //   const [id, setId] = useState()

  const { data } = useGetData('https://api.tvmaze.com/shows?page=1')
  if (onClickButton) {
    const fetchItems = async () => {
      const result = await axios(`https://api.tvmaze.com/search/shows?q=${input.inputSearch}`)
      console.log(result.data)
      setItems(result.data)
      setOnClickButton(false)
    }
    try {
      fetchItems()
    } catch (err) {
      console.log(err)
    }
  }
  if (!isLoading) {
    return (
      <>
        <Nabvar onChangeLoading={(f) => setIsLoading(f)} onClickFetch={(t) => setOnClickButton(t)} getInput={(d) => setInput(d)} />
        <section className='container py-4'>
          <div className='row gy-4'>
            {
      items.map((movie, index) => (
        <aside key={index} className=' norow col-12 col-md-6 col-lg-3 justify-content-center'>
          <CardSearch {...movie} />
        </aside>
      ))
      }
          </div>
        </section>
      </>
    )
  } else {
    return (
      <>
        <Nabvar onChangeLoading={(f) => setIsLoading(f)} onClickFetch={(t) => setOnClickButton(t)} getInput={(d) => setInput(d)} />
        <section className='container py-4'>
          <div className='row gy-4'>
            {
    data.map((movie, index) => (
      <aside key={index} className=' norow col-12 col-md-6 col-lg-3 justify-content-center'>
        <Card {...movie} />
      </aside>
    ))
    }
          </div>
        </section>
      </>

    )
  }
}
export default Movies
