import React from "react";
import { useLocalStorage } from "../../components/Hooks/useLocalStorage";
import Favourites from "../../components/Favourites/Favourites";

const FavouritesRoute: React.FC = () => {

   const toDisplay = useLocalStorage();
   


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
   
  return (
    <div>
      <Favourites display={toDisplay} changeLocalStorage={changeLocalStorage} />
    </div>
  );
};

export default FavouritesRoute;
