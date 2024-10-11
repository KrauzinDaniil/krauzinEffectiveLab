import { InnerList } from "./comicItem";

export interface Comics {
    id: number;
    title: string;
    isChar: boolean;
    description: string;
    isFavourited: boolean;
    thumbnail: {
        path: string;
        extension: string;
    };
    characters: InnerList
  
  }
  