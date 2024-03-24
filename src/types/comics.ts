import { ComicItem } from "./comicItem";

export interface Comics {
    id: number;
    name: string;
    isChar: boolean;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    comics: ComicItem[]; 
  
  }
  