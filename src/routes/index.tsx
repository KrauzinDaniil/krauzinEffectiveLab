import {  useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import LayoutRoute from './Layout/LayoutRoute'
import ComicsRoute from "./Comics/ComicsRoute";
import CharactersRoute from "./Characters/CharactersRoute";
import ComicsDescriptionRoute from "./ComicsDescription/ComicsDescriptionRoute";
import NoMatch from "./NoMatch/NoMatch";
import CharacterDescriptionRoute from "./CharacterDescriptionRoute/CharacterDescriptionRoute";
import './route.css'
import FavouritesRoute from "./FavouritesRoute/FavouritesRoute";
import FavouriteDetailsRoute from "./FavouriteDetailsRoute/FavouriteDetailsRoute";


const Routing: React.FC = () => { 

const routes: RouteObject[] = [
    {
      path: "/", element: <LayoutRoute />, children: [{ index: true, element: <CharactersRoute/> },
      {
        path: "/characters",
        element:<CharactersRoute/>,
      },
      { path: "/characters/:id", element: <CharacterDescriptionRoute /> },

      { path: "/comics", element:  <ComicsRoute/> },

      { path: "/comics/:id", element: <ComicsDescriptionRoute /> },

      { path: "/favourites", element: <FavouritesRoute/> },

      {path: "/favourites/:id", element:  <FavouriteDetailsRoute/>},

      { path: "*", element: <NoMatch /> },

      ]
    },
  ]

  const element = useRoutes(routes);

  console.log('Start');
setTimeout(function () {
console.log('Timeout (Macrotask)');
}, 0);
console.log('End');
  return ( 
     
    <div className="wrappa">
        
       {element}
        
    </div>
 )

}

export default Routing;
 


