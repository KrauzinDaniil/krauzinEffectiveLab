import classes from "./DisplayList.module.css";
import Search from "./Search/Search";
import Card from "../Card/Card";
import { DisplayInterface } from "../../types/DisplayInterface";



const DisplayList: React.FC<{display :  DisplayInterface[], type :boolean, onSetSearch: (value:string) => void}> = ( {display, type, onSetSearch}) => {

  
  return ( 
    <main className={classes.main}>
      
      <Search amount={display.length} type = {type}  onSearch={onSetSearch}></Search> 
      <div className={classes.divider}></div>
      <div className={classes.list}>
        {display.map((item) => (
          <Card
            key={item.id}
            imageUrl={item.thumbnail?.path}
            name={item.name}
            description={item.description}
            id={item.id}
            isHero={item.isChar}
          />
        ))}
      </div>

      <div className={classes.divider}></div>
    </main>
  );
};

export default DisplayList;
