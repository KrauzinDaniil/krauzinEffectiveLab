import { useEffect, FC, useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import Display from "../../components/Display";
import characterStore from "../../stores/Characters";
import { useDebounce } from "../../components/Hooks/debounce";
import { ToastContainer } from "react-toastify";


const CharactersRoute: FC = () => {
  const { characters, loading, initialLoading } = characterStore;

  const [toSearch, setToSearch] = useState("");

  const debounceSearchedItem = useDebounce(toSearch, 2000);

  function setSearch(value: string) {
    setToSearch(value);
  }

  function changeLocalStorage(
    key: string,
    value: string,
    mode: string
  ): unknown {
    switch (mode) {
      case "add":
        localStorage.setItem(key, value);
        break;
      case "delete":
        localStorage.removeItem(key);
        break;
      case "check":
        return localStorage.getItem(key);
        break;
    }
    return null;
  }


  useEffect(() => {
    characterStore.getCharacterList(debounceSearchedItem);
  }, [debounceSearchedItem]);

 //возможно слегка оптимизирует загрузку, потому что при прокрутке вниз реакт не пересоздает функцию ???
 const fetchMoreData = useCallback(() => {
   characterStore.getCharacterListWithOffset(toSearch);
 }, [toSearch]); 

       


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
        fetchMoreData={fetchMoreData}
        initialLoading={initialLoading}
      /> 
  

    
    </div>
  );
};

const ObservedCharactersRoute = observer(CharactersRoute);

export default ObservedCharactersRoute;
