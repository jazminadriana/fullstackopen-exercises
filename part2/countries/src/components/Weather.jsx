import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null)
  const api_key = import.meta.env.VITE_SOME_KEY

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
      .then(response => {
        setWeather(response.data)
      })
      .catch(error => console.log('Error fetching weather', error))
  }, [city, api_key])

  if (!weather) return null

  return (
    <div>
      <h3>Weather in {city}</h3>
      <p>temperature {weather.main.temp} Celsius</p>
      <img 
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
        alt="weather icon" 
      />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}

export default Weather