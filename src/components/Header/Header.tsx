import classes from './Header.module.css'
import {Link} from "react-router-dom";
import { useState } from 'react';




const Header: React.FC = () =>  { 

const [chosenMode, setChosenMode]  = useState(0); 


function onClickNav(mode : number) { 
  setChosenMode(mode)
}



return ( <header className={classes.header}>

  
   <span><img src="src/assets/marvel_logo.svg"/>
       <nav className={classes.wrapper}>
       <div > <Link to="characters"><a className={chosenMode === 0 ? classes.lined : ""} onClick={() => onClickNav(0)}>Characters</a></Link></div>
       <div > <Link to="comics"><a className={chosenMode === 1 ? classes.lined : ""} onClick={() => onClickNav(1)}>Comics</a></Link> </div>
       </nav> 
    </span>

  
    
</header>)





}

export default Header;