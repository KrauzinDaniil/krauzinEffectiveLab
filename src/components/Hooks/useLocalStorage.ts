import { useState } from "react";
import { DisplayInterface } from "../../types/DisplayInterface";

export function useLocalStorage() : DisplayInterface[] {
         const[display, changeDisplay] = useState<DisplayInterface[]>([]);
         for(const key in localStorage) { 
             const str = localStorage.getItem(key) 
             if(str !== null) { 
              display.push(JSON.parse(str))
             }

         }
  return display;
}
