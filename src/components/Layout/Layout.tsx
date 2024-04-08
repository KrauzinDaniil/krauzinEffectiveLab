import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";

const Layout: React.FC = () => {
  return (
    <div>
      <Header></Header>

      <Outlet />
      <div className={classes.marg}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
