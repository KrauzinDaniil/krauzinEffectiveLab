import { observable, action, makeObservable, runInAction, computed } from "mobx";

// API
import api from "../api";

// Types
import { DisplayInterface } from "../types/DisplayInterface";
import { DescriptionProps } from "../types/descriptionProps";
class CharacterStore {
  @observable
  characters: DisplayInterface[] = [];

  @observable
  loading: boolean = false;

  @observable
  character: DescriptionProps | null = null
   
  @observable
  totalCharacters: number = 0;

  @observable
  loadedAlready: number = 1;  

  @computed 
  get totalPageNumber():number { 
       return Math.ceil(this.totalCharacters / 25) 
  }  
 

  constructor() {
    makeObservable(this);
  }

  @action
  getCharacterList = async (startsWith: string): Promise<void> => {
    try {
      this.loading = true;

      const characters = await api.characters.getCharacterList(startsWith);

      runInAction(() => {
        this.characters = [];
        this.characters = characters.results.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          isChar: true,
          thumbnail: {
            path: item.thumbnail.path
              .concat("/landscape_incredible.")
              .concat(item.thumbnail.extension),
            extension: item.thumbnail.extension,
          },
          data: { 
            items: item.comics.items
          },
          isFavourited: false
    
        }))
        this.loadedAlready = 1;
        this.totalCharacters = characters.total;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };



  @action
  getCharacterListWithOffset = async (startsWith: string): Promise<void> => {
    try {
      this.loading = true;

      const characters = await api.characters.getCharacterListWithOffset(this.loadedAlready * 24, startsWith);

      this.loadedAlready+=1;

      runInAction(() => {
        
        let memoChar: DisplayInterface[] = []
        memoChar = characters.results.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          isChar: true,
          thumbnail: {
            path: item.thumbnail.path
              .concat("/landscape_incredible.")
              .concat(item.thumbnail.extension),
            extension: item.thumbnail.extension,
          },
          data: { 
            items: item.comics.items
          },
          isFavourited: false
    
        }));
        this.totalCharacters = characters.total;
        this.characters.push(...memoChar)
      
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };



  @action
  getCharacterDetails  = async (id: number): Promise<void> => {
    try {
      this.loading = true;

      const character = await api.characters.getCharacter(id);
        
      console.log(character)
      


      runInAction(() => {
        this.character = {
          id: character.id,
          name: character.name,
          description: character.description,
          thumbnail: character.thumbnail,
          isChar: true,
          dataList: { items: [] },
          isFavourited: false
        };
          
        this.character.dataList.items = character.comics.items.map((item) => ({
          resourceURI: item.resourceURI,
          name: item.name,
          
        }))
      
          
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}


const characterStore = new CharacterStore();

export default characterStore;
