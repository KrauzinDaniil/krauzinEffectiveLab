import { InnerList } from "./comicItem";

export interface Comics {
    id: number;
    title: string;
    isChar: boolean;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    characters: InnerList
  
  }
  