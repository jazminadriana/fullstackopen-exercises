import Weather from "./Weather"

const CountryDetail = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>

      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      
      <img 
        src={country.flags.png} 
        alt={`Flag of ${country.name.common}`} 
        style={{ width: '150px' }} 
      />
      <Weather city={country.capital[0]} />
    </div>
  )
}

export default CountryDetail