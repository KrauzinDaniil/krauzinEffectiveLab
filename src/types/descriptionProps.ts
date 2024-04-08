import { InnerList } from "./comicItem"

export interface DescriptionProps  {
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