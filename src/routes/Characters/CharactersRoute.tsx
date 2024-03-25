import { useEffect, FC, useState } from "react";
import { observer } from "mobx-react-lite";
import Display from "../../components/Display";
import characterStore from "../../stores/Characters";
import classes from "./CharactersRoute.module.css";
import { useDebounce } from "../../components/Hooks/debounce";

const CharactersRoute: FC = () => {
  const {characters, loading } = characterStore;

  const [pageAmount, setPageNumbe] = useState(5);

  const [lowBorder, setLowBorder] = useState(1);

  const [highBorder, setHighBorder] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  const [toSearch, setToSearch] = useState("");
                 
  const debounceSearchedItem = useDebounce(toSearch, 2000);               
                 
  const setCurrPage = (index: number): void => {
    setCurrentPage(index);
  }


  function setSearch(value: string) { 
    setToSearch(value)
  }

  const comp = [];
  for (let i = lowBorder; i < highBorder + 1; i++) {
    comp.push(
      <div
        onClick={() => {
          setCurrPage(i);
        }}
        className={i === currentPage ? classes.cellActive : classes.cell }
      >
        {i}
      </div>
    )
  }
 
   
  

  useEffect(() => {
  
    characterStore.getPostsList(debounceSearchedItem);
  }, [debounceSearchedItem])

  function loadAdditionalPage(offset: number, limit: number) {
    characterStore.getPostsListWithOffset(offset, limit, toSearch);
  }

  return (
    <div>
      {loading ? "Loading..." : null}
      <Display
        display={characters.slice((currentPage - 1) * 20, currentPage * 20)} type = {true} onSetSearch={setSearch}
      />
    
      <div className={classes.buttonPanel}>

      <div
          className={classes.buttonNextBackwards}
          onClick={() => {
          
    
            setHighBorder(highBorder - 5)
            setLowBorder(lowBorder - 5);
            setCurrPage(highBorder - 5);

          }}
        > {lowBorder > 5 ? "<" : ""} </div>

        <div
          className={classes.buttonPrev}
          onClick={() => {
            setHighBorder(highBorder - 1);
            setLowBorder(lowBorder - 1);
          }}
        >
          
          { lowBorder === 1 ? "" : "+"}
        </div>
        {comp}
        <div
          className={classes.buttonNext}
          onClick={() => {
            if (highBorder === pageAmount) {
              loadAdditionalPage(pageAmount * 20, 20);
              setPageNumbe(pageAmount + 1);
            }
            setHighBorder(highBorder + 1);
            setLowBorder(lowBorder + 1);
            setCurrPage(pageAmount)
          }}
        >
          
         
          +
        </div>

        <div
          className={classes.buttonNextFuther}
          onClick={() => {
         
            
            const newHighBorder = highBorder + 5;
           
            
            if(newHighBorder > pageAmount)   { 
              loadAdditionalPage((pageAmount * 20) + 100, 100 )
              setPageNumbe(pageAmount + 5)
              setHighBorder(pageAmount)
              setLowBorder(pageAmount - 5 )
            }  
            setHighBorder(highBorder + 5) 
            setLowBorder(lowBorder + 5)
              
            
          }}
        > - </div>
      </div>
    </div>
  );
};

const ObservedCharactersRoute = observer(CharactersRoute);

export default ObservedCharactersRoute;
