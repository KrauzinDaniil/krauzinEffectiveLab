import {  useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { heroesCards, comicsCards } from '../components/Storage(Mock)/Data';
import LayoutRoute from './Layout/LayoutRoute'
import ComicsRoute from "./Comics/ComicsRoute";
import CharactersRoute from "./Characters/CharactersRoute";
import DescriptionRoute from "./Description/DescriptionRoute";
import NoMatch from "./NoMatch/NoMatch";

const Routing: React.FC = () => { 

const routes: RouteObject[] = [
    {
      path: "/", element: <LayoutRoute />, children: [{ index: true, element: <CharactersRoute/> },
      {
        path: "/characters",
        element:<CharactersRoute/>,
      },
      { path: "/characters/:id", element: <DescriptionRoute cards={heroesCards} /> },

      { path: "/comics", element:  <ComicsRoute/> },

      { path: "/comics/:id", element: <DescriptionRoute cards={comicsCards} /> },

      { path: "*", element: <NoMatch /> },

      ]
    },
  ]

  const element = useRoutes(routes);


  return ( 

    <div>
        
       {element}
        
    </div>
 )

}

export default Routing;
 


