function SortBy({filterSortBy, setFilterSortBy}) {

  const handleChange = (e) => {
    setFilterSortBy(e.target.value);
  };
  return (
    <div className="SortBy">
      <label className="dropdown-Type">
        
        <select className="dropdown" onChange={(e) => {handleChange(e)}} value={filterSortBy}>
          <option value="date">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
          
          
        </select>
      </label>
      </div>
  );
}


export default SortBy;