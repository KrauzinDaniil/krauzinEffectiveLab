import { useEffect, FC, useState } from "react";
import { observer } from "mobx-react-lite";
import Display from "../../components/Display";
import characterStore from "../../stores/Characters";
import classes from "./CharactersRoute.module.css";
import { useDebounce } from "../../components/Hooks/debounce";
import { ToastContainer } from "react-toastify";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const CharactersRoute: FC = () => {
  const { characters, loading } = characterStore;

  const [pageAmount, setPageNumbe] = useState(5);

  const [lowBorder, setLowBorder] = useState(1);

  const [highBorder, setHighBorder] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  const [toSearch, setToSearch] = useState("");

  const debounceSearchedItem = useDebounce(toSearch, 2000);

  const setCurrPage = (index: number): void => {
    setCurrentPage(index);
  };

  function setSearch(value: string) {
    setToSearch(value);
  }

  const comp = [];
  for (let i = lowBorder; i < highBorder + 1; i++) {
    comp.push(
      <div
        onClick={() => {
          setCurrPage(i);
        }}
        className={i === currentPage ? classes.cellActive : classes.cell}
      >
        {i}
      </div>
    );
  }

  useEffect(() => {
    characterStore.getCharacterList(debounceSearchedItem);
  }, [debounceSearchedItem]);

  function loadAdditionalPage(offset: number, limit: number) {
    characterStore.getCharacterListWithOffset(offset, limit, toSearch);
  }

  return (
    <div>
      <ToastContainer />
      <Display
        display={characters.slice((currentPage - 1) * 20, currentPage * 20)}
        type={true}
        onSetSearch={setSearch}
        loading={loading}
      />

      {!loading && (
        <div className={classes.buttonPanel}>
          <div
            className={classes.navButton}
            onClick={() => {
              if (lowBorder > 5) {
                setHighBorder(highBorder - 5);
                setLowBorder(lowBorder - 5);
                setCurrPage(highBorder - 5);
              }
            }}
          >
            {lowBorder > 5 ? <AiOutlineDoubleLeft /> : ""}
          </div>

          <div
            className={classes.navButton}
            onClick={() => {
              if (lowBorder !== 1) {
                setHighBorder(highBorder - 1);
                setLowBorder(lowBorder - 1);
              }
            }}
          >
            {lowBorder === 1 ? "" : <AiOutlineLeft />}
          </div>

          {loading ? "" : comp}

          <div
            className={classes.navButton}
            onClick={() => {
              if (highBorder === pageAmount) {
                loadAdditionalPage(pageAmount * 20, 20);
                setPageNumbe(pageAmount + 1);
              }
              setHighBorder(highBorder + 1);
              setLowBorder(lowBorder + 1);
              setCurrPage(pageAmount);
            }}
          >
            <AiOutlineRight />
          </div>

          <div
            className={classes.navButton}
            onClick={() => {
              if (highBorder + 5 > pageAmount) {
                loadAdditionalPage(pageAmount * 20 + 100, 100);
                setPageNumbe(pageAmount + 5);
              }

              setHighBorder(highBorder + 5);
              setLowBorder(lowBorder + 5);
            }}
          >
            <AiOutlineDoubleRight />
          </div>
        </div>
      )}
    </div>
  );
};

const ObservedCharactersRoute = observer(CharactersRoute);

export default ObservedCharactersRoute;
