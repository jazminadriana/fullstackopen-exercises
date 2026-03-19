const Persons = ({ personsToShow }) => (
  <ul>
    {personsToShow.map(person => (
      <li key={person.name}>
        {person.name} <span className="phone-number">{person.number}</span>
      </li>
    ))}
  </ul>
)

export default Persons