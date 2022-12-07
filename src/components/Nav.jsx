import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          {/* <Link to="/reviews"> */}
            <p>Categories</p>
          {/* </Link> */}
        </li>
        <li>
          <Link to="/reviews">
            <p>Reviews</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
