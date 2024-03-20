import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <span>
        <img src="/public/marvel_logo.svg" />
        <nav className={classes.wrapper}>
          <div>
            {" "}
            <NavLink
              to="/characters"
              className={({ isActive }) => isActive ? classes.active: ""}
            >
              <a>Characters</a>
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink
              to="/comics"
              className={({ isActive }) => isActive ? classes.active : ""}
            >
              <a>Comics</a>
            </NavLink>
          </div>
        </nav>
      </span>
    </header>
  );
};

export default Header;
