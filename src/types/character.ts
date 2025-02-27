import { InnerList } from "./comicItem";

export interface Character {
  id: number;
  name: string;
  isChar: boolean;
  description: string;
  isFavourited: boolean;
  thumbnail: {
      path: string;
      extension: string;
  };
  comics: InnerList


}
