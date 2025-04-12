import { Link } from "react-router-dom";

const Navbar = ({ searchterm, setsearchterm }) => {
  return (
    <div className="container bg-white navbar d-flex justify-content-center gap-3">
      <div className="nav-brand ms-2">
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            fontFamily: "cursive",
          }}
          to="/"
        >
          <h1>BookTickets</h1>
        </Link>
      </div>
      <div className="d-flex">
        <input
          placeholder="search for movies"
          style={{ width: "500px" }}
          value={searchterm}
          onChange={(e) => setsearchterm(e.target.value)}
        />
        <button>Search</button>
      </div>
    </div>
  );
};
export default Navbar;
