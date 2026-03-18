import './App.css'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  // Function to handle the input change for the new name
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // Function to handle the form submission for adding a new person
  const addPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => 
      person.name.toLowerCase() === newName.toLowerCase()
    )

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key={person.name}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App
