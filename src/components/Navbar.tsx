import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-16 p-4">
        <h2 className="text-4xl font-bold ">CHITRAM</h2>
        <nav className="flex gap-4">
          <NavLink to="/" className="text-lg font-bold text-yellow-600">
            Movies
          </NavLink>
          <NavLink to="/series" className="text-lg font-bold text-yellow-600">
            Tv Series
          </NavLink>
        </nav>
        <div className="flex">
          <div>
            <input type="text" className="border" />
            <button>🔍</button>
          </div>
          <div>☀️</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
