import { InnerList } from "./comicItem"

export interface descriptionProps  {
    id: number  
    name: string
    isChar: boolean 
    description: string 
    thumbnail: {
        path: string 
        extension: string 
    } 
    dataList: InnerList


}