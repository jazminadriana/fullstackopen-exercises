import CountryDetail from "./CountryDetail"

const Content = ({ countries, setFilteredCountries }) => {
    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }

    if (countries.length > 1) {
        return (
            <ul>
                {countries.map(country => (
                <li key={country.cca3}>
                    {country.name.common}{' '}
                    <button onClick={() => setFilteredCountries([country])}>
                        show
                    </button>
                </li>
                ))}
            </ul>
        )
    }
    
    if (countries.length === 1) {
        return <CountryDetail country={countries[0]} />
    }
    
    return null
}

export default Content