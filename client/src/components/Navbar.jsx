import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🩸 LifeLink</h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/search">Search</Link>
        <Link to="/stock">Stock</Link>
        <Link to="/request">Request</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;