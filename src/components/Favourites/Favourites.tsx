import { DisplayInterface } from "../../types/DisplayInterface";
import Card from "../Card/Card";
import classes from "./Favourites.module.css";




const Favourites: React.FC<{
  display: DisplayInterface[];
  changeLocalStorage: (key: string, value: string, mode:string) => void;
}> = ({ display, changeLocalStorage }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <h1 className={classes.searchLabel}>Favourites</h1>
        <div className={classes.amount}> ({display.length}) </div>
      </div>
      <div className={classes.list}>
      <div className={classes.divider}></div>
      {display.map((item) => (
              <Card
                key={item.id}
                thumbnail={item.thumbnail?.path}
                name={item.name}
                description={item.description}
                id={item.id}
                isHero={item.isChar}
                changeStorage={changeLocalStorage}
                isFavourited = {true}
                dataList={item.data}
              />
            ))}
        </div>
     
    </div>
  );
};
export default Favourites;
