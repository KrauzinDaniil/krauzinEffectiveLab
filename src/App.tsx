
import './App.css'
import { Link, useRoutes, Outlet } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Display from './components/Display';
import { heroesCards, comicsCards } from './components/Storage(Mock)/Data';
import Description from './components/Description/Description';
export default function App() {
  const routes: RouteObject[] = [
    {
      path: "/", element: <Layout />, children: [{ index: true, element: <Display cards={heroesCards} /> },
      {
        path: "/characters",
        element: <Display cards={heroesCards} />,
      },
      { path: "/characters/:id", element: <Description cards={heroesCards} /> },

      { path: "/comics", element: <Display cards={comicsCards} /> },
      { path: "/comics/:id", element: <Description cards={comicsCards} /> },
      { path: "*", element: <NoMatch /> },

      ]
    },



  ]




  const element = useRoutes(routes);

  return (
    <div className='wrapper'>
     
        <Header></Header>
    
         
        {element}
      

      
        <Footer></Footer>

    </div>
  );
}

function Layout() {
  return (
    <Outlet />

  )
}


function NoMatch() {
  return (
    <div>
      <h2>It looks like you're lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}