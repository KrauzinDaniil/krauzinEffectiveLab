import { VirtuosoGrid } from "react-virtuoso";
import { DisplayInterface } from "../../types/DisplayInterface";
import Card from "../Card/Card";
import classes from "./Favourites.module.css";




const Favourites: React.FC<{
  display: DisplayInterface[];
  changeLocalStorage: (key: string, value: string, mode:string) => void;
}> = ({ display, changeLocalStorage }) => {
  return (
    <main>
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <h1 className={classes.searchLabel}>Favourites</h1>
        <div className={classes.amount}> ({display.length}) </div>
      </div>
      </div>
      <div className={classes.divider}></div>
      <VirtuosoGrid
        useWindowScroll={true}
        data={display}
        listClassName={classes.rowList}
        itemClassName={classes.itemRow}
        itemContent={(_, user) => (
          <Card
            key={user.id}
            thumbnail={user.thumbnail?.path}
            name={user.name}
            description={user.description}
            id={user.id}
            isHero={user.isChar}
            changeStorage={changeLocalStorage}
            isFavourited={false}
            dataList={user.data}
          />
        )}
      />
     
     
        </main>
  );
};
export default Favourites;
