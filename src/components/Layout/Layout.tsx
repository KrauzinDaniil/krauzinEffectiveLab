import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";



const Layout: React.FC = () => {

   
  
  
  
    return (



        <div>
        <Header></Header>
    
        <Outlet />
       
        <Footer></Footer>
        </div>



    )
  
  
  
  
  
  }
  
  export default Layout;