import { DisplayInterface } from "../../types/DisplayInterface";
export function useLocalStorage() : DisplayInterface[] {
         const display: DisplayInterface[] = []
         localStorage.removeItem("loglevel");
         for(const key in localStorage) { 
             const str = localStorage.getItem(key) 
             if(str !== null) { 
              display.push(JSON.parse(str))
             }

         }

  return display;
}
