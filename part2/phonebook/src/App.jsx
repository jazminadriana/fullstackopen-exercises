import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())    
    
    if (existingPerson) {
      const confirmUpdate = window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)

      if (confirmUpdate) {
        const changedPerson = { ...existingPerson, number: newNumber }

        personService
          .update(existingPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person =>
              person.id !== existingPerson.id ? person : returnedPerson
            ))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            alert(`Contact '${existingPerson.name}' had already been deleted from the server.`)
          })    
      }

      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        alert('Error al guardar el contacto')
      })
  }

  const deletePersonOf = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          alert(`Contact '${name}' had already been deleted from the server.`)
          setPersons(persons.filter(p => p.id !== id)) 
        })
    }
  }

  const personsToShow = filter === ''
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())) 

  return (
    <div className="container">
      <h2>Agenda Telefónica</h2>
      
      <Filter value={filter} onChange={(e) => setFilter(e.target.value)} />
      
      <h3>Añadir nuevo</h3>
      <PersonForm 
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={(e) => setNewName(e.target.value)}
        newNumber={newNumber}
        handleNumberChange={(e) => setNewNumber(e.target.value)}
      />

      <h3>Números</h3>
      <Persons persons={personsToShow} deletePerson={deletePersonOf} />
    </div>
  )
}

export default App