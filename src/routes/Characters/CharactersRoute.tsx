import { useEffect, FC, useState } from "react";
import { observer } from "mobx-react-lite";
import Display from "../../components/Display";
import characterStore from "../../stores/Characters";
import classes from "./CharactersRoute.module.css";

const CharactersRoute: FC = () => {
  const { characters, loading } = characterStore;

  const [pageAmount, setPageNumbe] = useState(5);

  const [lowBorder, setLowBorder] = useState(1);

  const [highBorder, setHighBorder] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  const setCurrPage = (index: number): void => {
    setCurrentPage(index);
  };
  console.log(characters.length);
  const comp = [];
  for (let i = lowBorder; i < highBorder + 1; i++) {
    comp.push(
      <div
        onClick={() => {
          setCurrPage(i);
        }}
        className={classes.cell}
      >
        {i}
      </div>
    );
  }

  useEffect(() => {
    characterStore.getPostsList();
  }, []);

  function loadAdditionalPage(offset: number) {
    characterStore.getPostsListWithOffset(offset);
  }

  return (
    <div>
      {loading ? "Loading..." : null}
      <Display
        display={characters.slice((currentPage - 1) * 20, currentPage * 20)}
      />

      <div className={classes.buttonPanel}>
        <div
          className={classes.buttonPrev}
          onClick={() => {
            setHighBorder(highBorder - 1);
            setLowBorder(lowBorder - 1);
          }}
        >
          {" "}
          +{" "}
        </div>{" "}
        {comp}{" "}
        <div
          className={classes.buttonNext}
          onClick={() => {
            if (highBorder === pageAmount) {
              loadAdditionalPage(pageAmount * 20);
              setPageNumbe(pageAmount + 1);
            }
            setHighBorder(highBorder + 1);
            setLowBorder(lowBorder + 1);
          }}
        >
          {" "}
          +{" "}
        </div>
      </div>
    </div>
  );
};

const ObservedCharactersRoute = observer(CharactersRoute);

export default ObservedCharactersRoute;
