import { NavLink } from "react-router-dom";
import "./style.scss";

const Navigation = () => {
  return (
    <ul className="nav">
      <li className="nav__item">
        <NavLink
          exact
          className="nav__link"
          activeClassName="nav__link--active"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          className="nav__link"
          activeClassName="nav__link--active"
          to="/movies"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
