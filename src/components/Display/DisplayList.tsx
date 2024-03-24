import classes from "./DisplayList.module.css";
import Search from "./Search/Search";
import Card from "../Card/Card";
import { Character } from "../../types/character";

const DisplayList: React.FC<{ character: Character[] } > = ({character}) => {
  return ( 
    <main className={classes.main}>
      <Search amount={character.length} type={true}></Search>
      <div className={classes.divider}></div>
      <div className={classes.list}>
        {character.map((item) => (
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
    </main>
  );
};

export default DisplayList;
