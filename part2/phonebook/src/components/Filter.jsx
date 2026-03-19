const Filter = ({ value, onChange }) => (
  <div className="filter-container">
    filter shown with: <input value={value} onChange={onChange} />
  </div>
)

export default Filter
