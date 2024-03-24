import React from "react";
import Display from "../../components/Display";
import { observer } from 'mobx-react-lite';
import comicsStore from '../../stores/Comics';
import { useEffect } from "react";

const ComicsRoute: React.FC = () => {
  
       const { comics, loading } = comicsStore;
       
       useEffect(() => {
              comicsStore.getComicsList();
            }, []);


       return (
           <div>
   
              {loading ? 'Loading...' : null}
              <Display character={comics}/>
        


              </div>
         )
  
  
  
  
  
  }
  
  export default observer(ComicsRoute);