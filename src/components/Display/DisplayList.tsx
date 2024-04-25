import classes from "./DisplayList.module.css";
import Search from "./Search/Search";
import Card from "../Card/Card";
import { DisplayInterface } from "../../types/DisplayInterface";


const DisplayList: React.FC<{
  display: DisplayInterface[];
  type: boolean;
  onSetSearch: (value: string) => void;
  changeLocalStorage: (key: string, value: string, mode:string) => void;
  loading: boolean;
  total:number;
}> = ({ display, type, onSetSearch, loading, total, changeLocalStorage,  }) => {
  return (
    <main className={classes.main}>
      <Search
        type={type}
        onSearch={onSetSearch}
        total = {total}
      ></Search>

      {loading ? (
        <div className={classes.loadingImage}>
          <img src="/public/marvelous.png" alt="" />
          <div className={classes.loadingLabel}> Please wait</div>
        </div>
      ) : (
        <>
         <div className={classes.divider}></div>
          <div className={classes.list}>
            {display.map((item) => (
              <Card
                key={item.id}
                thumbnail={item.thumbnail?.path}
                name={item.name}
                description={item.description}
                id={item.id}
                isHero={item.isChar}
                changeStorage={changeLocalStorage}
                isFavourited ={false}
                dataList={item.data}

              />
            ))}
          </div>
          <div className={classes.divider}></div>
        </>
      )}
    </main>
  );
};

export default DisplayList;
