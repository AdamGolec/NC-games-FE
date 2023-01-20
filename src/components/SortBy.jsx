function SortBy({ filterSortBy, setFilterSortBy }) {
  const handleChange = (e) => {
    setFilterSortBy(e.target.value);
  };
  return (
    <div className="SortBy">
      <label className="dropdown-Type">
        <select
          className="dropdown-content"
          onChange={(e) => {
            handleChange(e);
          }}
          value={filterSortBy}
        >
          <option value="date">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
      </label>
    </div>
  );
}

export default SortBy;
