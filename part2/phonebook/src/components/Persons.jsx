const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map(person => 
        <li key={person.id}>{person.name} <span className="phone-number">{person.number}</span></li>
      )}
    </ul>
  )
}

export default Persons