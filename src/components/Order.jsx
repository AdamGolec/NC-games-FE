function Order({ filterOrderBy, setFilterOrderBy }) {
  const handleChange = (e) => {
    setFilterOrderBy(e.target.value);
  };
  return (
    <div className="SortBy">
      <label className="dropdown-Type">
        <select
          className="dropdown-content"
          onChange={(e) => {
            handleChange(e);
          }}
          value={filterOrderBy}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
}

export default Order;
