import { InnerList } from "./comicItem";

export interface DisplayInterface  { 
    id: number;
    name: string;
    isChar: boolean;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    data: InnerList
  
   
}