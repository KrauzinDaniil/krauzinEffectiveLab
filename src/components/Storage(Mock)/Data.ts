



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


export const heroesCards: ListData[] = [
  { imageUrl: "/src/assets/heroes_avatars/tony-stark.jpg", name: "Tony Stark", description: "Billionaire, playboy, philanthropist...", id: 0, contentList: [{ id: 0, name: "Avengers: New-York" }, { id: 4, name: "Infinity Gaunlet" }], isCharacter: true },
  { imageUrl: "/src/assets/heroes_avatars/captain-america.jpg", name: "Captain America", description: "He can do this all day", id: 1, contentList: [{ id: 0, name: "Avengers: New-York" }, { id: 4, name: "Infinity Gaunlet" }, { id: 2, name: "Civil war" }], isCharacter: true },
  { imageUrl: "/src/assets/heroes_avatars/hulk.jpg", name: "Hulk", description: "He who hates stairs", id: 2, contentList: [{ id: 0, name: "Avengers: New-York" }, { id: 3, name: "Hulk incredible" }, { id: 4, name: "Infinity Gaunlet" }], isCharacter: true },
  { imageUrl: "/src/assets/heroes_avatars/loki.jpg", name: "Loki", description: "The smartest brother", id: 3, contentList: [{ id: 5, name: "Loki" }, { id: 6, name: "Battle of Asgard" }, { id: 0, name: "Avengers: New-York" }, { id: 4, name: "Infinity Gaunlet" }], isCharacter: true },
  { imageUrl: "/src/assets/heroes_avatars/thor.jpeg", name: "Thor", description: "The worthy brother", id: 4, contentList: [{ id: 5, name: "Loki" }, { id: 6, name: "Battle of Asgard" }, { id: 0, name: "Avengers: New-York" }, { id: 4, name: "Infinity Gaunlet" }], isCharacter: true },
  { imageUrl: "/src/assets/heroes_avatars/black-widow.jpeg", name: "Black Widow", description: "Agent Romanoff", id: 5, contentList: [{ id: 0, name: "Avengers: New-York" }, { id: 1, name: "Shield agent" }, { id: 2, name: "Civil war" }], isCharacter: true },


]

export const comicsCards: ListData[] = [
  { imageUrl: "/src/assets/comics_avatars/avengers.jpg", name: "Avengers: New-York", description: "Union of greatest heroes", id: 0, contentList: [{ id: 0, name: "Tony Stark" }, { id: 1, name: "Captain America" }, { id: 2, name: "Hulk" }, { id: 3, name: "Loki" }, { id: 4, name: "Thor" }, { id: 5, name: "Black Widow" }], isCharacter: false },
  { imageUrl: "/src/assets/comics_avatars/black-widow-comics.jpg", name: "Shield agent", description: "Smart and Agile", id: 1, contentList: [{ id: 5, name: "Black Widow" }], isCharacter: false },
  { imageUrl: "/src/assets/comics_avatars/first-avenger.jpg", name: "Civil war", description: "The first avenger story", id: 2, contentList: [{ id: 1, name: "Captain America" }, { id: 5, name: "Black Widow" }], isCharacter: false },
  { imageUrl: "/src/assets/comics_avatars/hulk.jpg", name: "Hulk incredible", description: "No description", id: 3, contentList: [{ id: 2, name: "Hulk" }], isCharacter: false },
  { imageUrl: "/src/assets/comics_avatars/infinity-war.jpg", name: "Infinity Gaunlet", description: "Titan evil plan of evaporation half of the living life come at last...", id: 4, contentList: [{ id: 0, name: "Tony Stark" }, { id: 1, name: "Captain America" }, { id: 2, name: "Hulk" }, { id: 3, name: "Loki" }, { id: 4, name: "Thor" }], isCharacter: false },
  { imageUrl: "/src/assets/comics_avatars/loki-stories.jpg", name: "Loki", description: "Stories of betrayal and loyalty", id: 5, contentList: [{ id: 3, name: "Loki" }, { id: 4, name: "Thor" }], isCharacter: false },
  { imageUrl: "/src/assets/comics_avatars/thor-comics.webp", name: "Battle of Asgard ", description: "First son of Odin legacy", id: 6, contentList: [{ id: 3, name: "Loki" }, { id: 4, name: "Thor" }], isCharacter: false },

]

