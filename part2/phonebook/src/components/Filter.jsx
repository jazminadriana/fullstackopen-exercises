const Filter = ({ value, onChange }) => {
  return (
    <div>
      filtrar por nombre: <input value={value} onChange={onChange} />
    </div>
  )
}

export default Filter
