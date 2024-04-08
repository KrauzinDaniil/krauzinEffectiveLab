import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import classes from './Layout.module.css'
const Layout: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <Header></Header>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;