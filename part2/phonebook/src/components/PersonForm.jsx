const PersonForm = ({ onSubmit, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        nombre: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        teléfono: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">agregar</button>
      </div>
    </form>
  )
}

export default PersonForm
