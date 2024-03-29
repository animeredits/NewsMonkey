import { Link } from "react-router-dom";
const Navbar = () => {
  
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark"
        style={{ background: "#010409" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News Monkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/General">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Technology">
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                placeholder="Search on News-app"
                style={{
                  backgroundColor: "#010409",
                  boxShadow: "none",
                  color: "white",
                  "::placeholder": {},
                  WebkitTextFillColor: "white",
                  opacity: 1,
                }}
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
