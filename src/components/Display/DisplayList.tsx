import classes from "./DisplayList.module.css";
import Search from "./Search/Search";
import Card from "../Card/Card";
import { DisplayInterface } from "../../types/DisplayInterface";
import { VirtuosoGrid } from "react-virtuoso";

const DisplayList: React.FC<{
  display: DisplayInterface[];
  type: boolean;
  onSetSearch: (value: string) => void;
  changeLocalStorage: (key: string, value: string, mode: string) => void;
  fetchMoreData: () => void;
  loading: boolean;
  initialLoading: boolean;
  total: number;
}> = ({
  display,
  type,
  onSetSearch,
  loading,
  initialLoading,
  total,
  changeLocalStorage,
  fetchMoreData,
}) => {
  return (
    <main>
      <Search type={type} onSearch={onSetSearch} total={total}></Search>

      <div className={classes.divider}></div>
      {!initialLoading ? (
        <>
          <VirtuosoGrid
            useWindowScroll={true}
            data={display}
            listClassName={classes.rowList}
            itemClassName={classes.itemRow}
            endReached={fetchMoreData}
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
          {loading ? (
            <div className={classes.loadingImage}>
              <img src="/public/marvelous.png" alt="" />
              <div className={classes.loadingLabel}> Please wait</div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <div className={classes.loadingImage}>
          <img src="/public/marvelous.png" alt="" />
          <div className={classes.loadingLabel}> Please wait</div>
        </div>
      )}
    </main>
  );
};

export default DisplayList;
