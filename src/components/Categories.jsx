
function Categories({ filterCategory, setFilterCategory}){

  const handleChange = (e) => {
    setFilterCategory(e.target.value);
    // useNavigate
  };
// console.log(filterCategory);
  return (
    <div className="Categories">
      <label className="dropdown-Type">
        
        <select className="dropdown" onChange={(e) => {handleChange(e)}} value={filterCategory}>
          <option value="all">All Games</option>
          <option value="strategy">Strategy</option>
          <option value="hidden-roles">Hidden-roles</option>
          <option value="dexterity">Dexterity</option>
          <option value="push-your-luck">Push-your-luck</option>
          <option value="roll-and-write">Roll-and-write</option>
          <option value="deck-building">Deck-building</option>
          <option value="engine-building">Engine-building</option>
          
        </select>
      </label>
      </div>
  );
}

export default Categories;