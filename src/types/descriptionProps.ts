import { InnerList } from "./comicItem"

export interface DescriptionProps  {
    id: number  
    name: string
    isChar: boolean 
    description: string
    isFavourited: boolean; 
    thumbnail: {
        path: string 
        extension: string 
    } 
    dataList: InnerList



}