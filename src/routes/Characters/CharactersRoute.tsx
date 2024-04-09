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

  const [lowBorder, setLowBorder] = useState(1);

  const [highBorder, setHighBorder] = useState(5);

  const [toSearch, setToSearch] = useState("");

  const debounceSearchedItem = useDebounce(toSearch, 2000); 
  
  function setSearch(value: string) { 
    setToSearch(value)
  }

  function changeLocalStorage(key : string, value : string, mode: string): unknown {
          switch(mode) {
          case "add" : 
          localStorage.setItem(key,value)
          break;
          case "delete": 
          localStorage.removeItem(key)
          break 
          case "check" :
          return localStorage.getItem(key)
          break

          }
          return null;
         
          

       }

  
 
     

  const comp = [];
  for (let i = lowBorder; i < highBorder + 1; i++) {
    comp.push(
      <div
        onClick={() => {
          loadAdditionalPage((i - 1) * 25);
        }}
        className={i === characterStore.currentPage ? classes.cellActive : classes.cell}
      >
        {i}
      </div>
    );
  }

  useEffect(() => {
    characterStore.getCharacterList(debounceSearchedItem);
   
  }, [debounceSearchedItem]);

  function loadAdditionalPage(offset: number) {
    characterStore.getCharacterListWithOffset(offset, toSearch);
  }
  
  return (
    <div>
      
      <ToastContainer />
      <Display
        display={characters}
        type={true}
        onSetSearch={setSearch}
        loading={loading}
        total={characterStore.totalCharacters}
        changeLocalStorage={changeLocalStorage}
        
        
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

          {loading ? "" : comp}

          <div
            className={classes.navButton}
            onClick={() => {
              if(highBorder > characterStore.totalPageNumber)  { 
               return; 
             }
             else { setHighBorder(highBorder + 1)
                    setLowBorder (lowBorder  + 1)  
                  }
            }}
          >
            <AiOutlineRight />
          </div>

          <div
            className={classes.navButton}
            onClick={() => {
              if (highBorder + 5 > characterStore.totalPageNumber && characterStore.totalPageNumber >= 5) {
                 setHighBorder(characterStore.totalPageNumber)
                 setLowBorder(characterStore.totalPageNumber - 5)
              } else if(characterStore.totalPageNumber >= 5) {
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

const ObservedCharactersRoute = observer(CharactersRoute);

export default ObservedCharactersRoute;
