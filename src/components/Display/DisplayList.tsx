import classes from "./DisplayList.module.css";
import Search from "./Search/Search";
import Card from "../Card/Card";
import { DisplayInterface } from "../../types/DisplayInterface";

const DisplayList: React.FC<{
  display: DisplayInterface[];
  type: boolean;
  onSetSearch: (value: string) => void;
  loading: boolean;
  total:number
}> = ({ display, type, onSetSearch, loading, total }) => {
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
        </>
      )}
    </main>
  );
};

export default DisplayList;
