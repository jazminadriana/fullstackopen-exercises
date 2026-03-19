import './App.css'
import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'  

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // Function to handle changes in the search input field
  const handleSearchChange = (event) => {
  setSearchTerm(event.target.value)
}

  // Functions to handle changes in the input fields for name and number
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
  setNewNumber(event.target.value)  
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
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = searchTerm === ''
  ? persons
  : persons.filter(person => 
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <Filter value={searchTerm} onChange={handleSearchChange} />

      <h3>Add a new</h3>
      <PersonForm 
        onSubmit={addPerson}
        nameValue={newName}
        nameOnChange={handleNameChange}
        numberValue={newNumber}
        numberOnChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
