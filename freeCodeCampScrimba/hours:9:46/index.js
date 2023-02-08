function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

function MainContent() {
  return (
    <div>
      <h1>I want to master React</h1>
    </div>
  );
}

const element = <h1 className="header">I am here to learn React</h1>;
console.log(element);
const content = (
  <div>
    element
    <ul>
      <li>item A</li>
      <li>item B</li>
      <li>item C</li>
      <li>item D</li>
    </ul>
    <NavBar></NavBar>
    <MainContent></MainContent>
  </div>
);

// ReactDOM.render(content, document.getElementById("root"));

// Imperative Way
const tag = document.createElement("h1");
tag.className = "header";
tag.textContent = "This is imperative way of doing ";
// document.getElementById("root").appendChild(tag);
console.log(tag);

const Nav = (
  <nav>
    <h1>Learn React </h1>
    <ul>
      <li>About</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(Nav, document.getElementById("root"));
// document.getElementById("root").append(Nav);
