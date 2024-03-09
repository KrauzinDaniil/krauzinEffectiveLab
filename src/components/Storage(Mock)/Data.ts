


let id = 0;
export interface ListData {
    imageUrl: string;
    name: string;
    description: string;
    id: number;
    contentList: ContentList[];
    isCharacter: boolean; 
    
}


interface ContentList {  
      id: number;
      name: string; 
}



export interface CardArray {
    cards: ListData[]
}


export const heroesCards: ListData[] =  [
  { imageUrl:  "/src/assets/heroes_avatars/homelander.webp", name: "Homelander",description: "The Real Hero", id: id++, contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "Hulk Incredible"}], isCharacter: true},
  { imageUrl:  "/src/assets/heroes_avatars/captain-america.jpg", name: "Captain America",description: "The Real Hero",id: id++,  contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: true },
  { imageUrl:  "/src/assets/heroes_avatars/homelander.webp", name: "Homelander",description: "The Real Hero", id: id++,  contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: true },
  { imageUrl:  "/src/assets/heroes_avatars/homelander.webp", name: "Homelander",description: "The Real Hero",id: id++,  contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: true },
  { imageUrl:  "/src/assets/heroes_avatars/homelander.webp", name: "Homelander",description: "The Real Hero",id: id++,  contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: true },
  { imageUrl:  "/src/assets/heroes_avatars/homelander.webp", name: "Homelander",description: "The Real Hero",id: id++,  contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: true },
  { imageUrl:  "/src/assets/heroes_avatars/homelander.webp", name: "Homelander",description: "The Real Hero",id: id++, contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: true },

]

export const comicsCards: ListData[]=  [
  { imageUrl:  "/src/assets/comics_avatars/hulk.jpg", name: "Hulk Incredible",description: "The Hulk Hero", id: 2, contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: false},
  { imageUrl:   "/src/assets/comics_avatars/hulk.jpg", name: "Hulk Incredible",description: "Well",id: id++,  contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: false },
  { imageUrl:  "/src/assets/comics_avatars/hulk.jpg", name: "Hulk Incredible",description: "The Real Hero", id: id++,  contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: false },
  { imageUrl:   "/src/assets/comics_avatars/hulk.jpg", name: "Hulk Incredible",description: "The Real Hero",id: id++,  contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: false },
  { imageUrl:   "/src/assets/comics_avatars/hulk.jpg", name: "Hulk Incredible",description: "The Real Hero",id: id++,  contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: false },
  { imageUrl:   "/src/assets/comics_avatars/hulk.jpg", name: "Hulk Incredible",description: "The Real Hero",id: id++,  contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: false },
  { imageUrl:   "/src/assets/comics_avatars/hulk.jpg", name: "Hulk Incredible",description: "The Real Hero",id: id++, contentList: [{id:1, name: "The Boys: 12" }, {id: 2, name: "The Boys 1"}], isCharacter: false },

]

