import { Link } from "react-router-dom";
import Categories from "./Categories";
import Order from "./Order";
import SortBy from "./SortBy";

function Nav({
  filterOrderBy,
  setFilterOrderBy,
  filterCategory,
  setFilterCategory,
  filterSortBy,
  setFilterSortBy,
}) {
  console.log(filterSortBy, "nav");
  console.log(filterOrderBy);

  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Categories
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
          />
        </li>
        <li>
          <Order
            filterOrderBy={filterOrderBy}
            setFilterOrderBy={setFilterOrderBy}
          />
        </li>
        <li>
          <SortBy
            filterSortBy={filterSortBy}
            setFilterSortBy={setFilterSortBy}
          />
        </li>
        <li>
          <Link to="/reviews" onClick={() => setFilterCategory('all')}>
            <p>Reviews</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
