import { useState, useEffect, use } from 'react'
import axios from 'axios'
import Content from './components/Content'

const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })  
    },[])

  const handleChange = (event) => {
    const query = event.target.value
    setValue(query)

    const regex = new RegExp(query, 'i')
    const filtered = countries.filter(country => 
      country.name.common.match(regex)
    )
    setFilteredCountries(filtered)
  }
  
  return (
    <div>
      <form>
        find countries <input value={value} onChange={handleChange} />  
      </form>
      <Content countries={filteredCountries} setFilteredCountries={setFilteredCountries} />
    </div>
  )

}


export default App
