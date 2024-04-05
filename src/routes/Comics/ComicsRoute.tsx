import React from "react";
import Display from "../../components/Display";
import { observer } from "mobx-react-lite";
import comicsStore from "../../stores/Comics";
import { useEffect, useState } from "react";
import classes from "./ComicsRoute.module.css";
import { useDebounce } from "../../components/Hooks/debounce";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";




const ComicsRoute: React.FC = () => {
  const { comics, loading } = comicsStore;


  const [lowBorder, setLowBorder] = useState(1);

  const [highBorder, setHighBorder] = useState(5);

  const [toSearch, setToSearch] = useState("");

  const debounceSearchedItem = useDebounce(toSearch, 2000); 
  
  function setSearch(value: string) { 
    setToSearch(value)
  }



  


  const totalButtons = [];
  for (let i = lowBorder; i < highBorder + 1; i++) {
    totalButtons.push(
      <div
        onClick={() => {
          loadAdditionalPage((i - 1) * 25);
        }}
        className={i === comicsStore.currentPage ? classes.cellActive : classes.cell}
      >
        {i}
      </div>
    );
  }
  
  
  useEffect(() => {
  
    comicsStore.getComicsList(debounceSearchedItem);
  }, [debounceSearchedItem])


  function loadAdditionalPage(offset: number) {
    comicsStore.getComicsListWithOffset(offset, toSearch);
  }

  

  return (
    <div>
      
      <Display
        display={comics} type = {false} onSetSearch={setSearch} loading = {loading} total={comicsStore.totalComics}
      />
       {!loading && (
        <div className={classes.buttonPanel}>
          <div
            className={classes.navButton}
            onClick={() => {
              if (lowBorder > 5) {
                setHighBorder(highBorder - 5);
                setLowBorder(lowBorder - 5);
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

          {loading ? "" : totalButtons}

          <div
            className={classes.navButton}
            onClick={() => {
                 if(highBorder >= comicsStore.totalPageNumber)  { 
                  return; 
                }
                else { setHighBorder(highBorder + 1)
                       setLowBorder (lowBorder  + 1)  
                     }
              }
          }

          >
            <AiOutlineRight />
          </div>

          <div
            className={classes.navButton}
            onClick={() => {
              if (highBorder + 5 > comicsStore.totalPageNumber && comicsStore.totalPageNumber >= 5) {
                 setHighBorder(comicsStore.totalPageNumber)
                 setLowBorder(comicsStore.totalPageNumber - 5)
              } else  if(comicsStore.totalPageNumber >= 5) {

              setHighBorder(highBorder + 5);
              setLowBorder(lowBorder + 5);
              }
            }}
          >
            <AiOutlineDoubleRight />
          </div>
        </div>
      )}
    </div>
  );
};
const ObservedComicsRoute = observer(ComicsRoute);

export default ObservedComicsRoute;
