import React, { useCallback } from "react";
import Display from "../../components/Display";
import { observer } from "mobx-react-lite";
import comicsStore from "../../stores/Comics";
import { useEffect, useState } from "react";
import { useDebounce } from "../../components/Hooks/debounce";
import { ToastContainer } from "react-toastify";


const ComicsRoute: React.FC = () => {
  const { comics, loading, initialLoading } = comicsStore;

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
    comicsStore.getComicsList(debounceSearchedItem);
  }, [debounceSearchedItem]);

  //возможно слегка оптимизирует загрузку, потому что при прокрутке вниз реакт не пересоздает функцию ???
  const fetchMoreData = useCallback(() => {
    comicsStore.getComicsListWithOffset(toSearch);
  }, [toSearch]);



  return (
    <div>
      <ToastContainer />
      <Display
        display={comics}
        type={false}
        onSetSearch={setSearch}
        loading={loading}
        total={comicsStore.totalComics}
        changeLocalStorage={changeLocalStorage}
        fetchMoreData={fetchMoreData}
        initialLoading={initialLoading}
      />

   
    </div>
  );
};
const ObservedComicsRoute = observer(ComicsRoute);

export default ObservedComicsRoute;
