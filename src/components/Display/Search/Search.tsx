import classes from "./Search.module.css";
import { ChangeEvent } from "react";

const Search: React.FC<{

  type: boolean;
  onSearch: (value: string) => void;
  total:number
}> = ({ type, onSearch, total }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    onSearch(formData.get("search") as string);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        {" "}
        <h1 className={classes.searchLabel}>
          {type === true ? "Сharacters" : "Comics"}
        </h1>{" "}
        <div className={classes.amount}> ({total})</div>{" "}
      </div>
      <div className={classes.wrapperSearch}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder={
              "Search for " +
              (type === true ? "Characters" : "Comics") +
              " by name"
            }
            onChange={handleChange}
          />
          <button className={classes.search} type="submit">
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
