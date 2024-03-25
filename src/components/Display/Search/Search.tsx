import classes from "./Search.module.css";
import { ChangeEvent } from "react";

const Search: React.FC<{
  amount: number;
  type: boolean;
  onSearch: (value: string) => void;
}> = ({ amount, type, onSearch }) => {
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
        <div className={classes.amount}> ({amount})</div>{" "}
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
