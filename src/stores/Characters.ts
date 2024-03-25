import { observable, action, makeObservable, runInAction } from "mobx";

// API
import api from "../api";

// Types
import { DisplayInterface } from "../types/DisplayInterface";
import { descriptionProps } from "../types/descriptionProps";
class CharacterStore {
  @observable
  characters: DisplayInterface[] = [];

  @observable
  loading: boolean = false;

  @observable
  character: descriptionProps = {id: 0, name:"", isChar:true, description:"", thumbnail: { path:"", extension: ""}, dataList: { items:[] } }

  constructor() {
    makeObservable(this);
  }

  @action
  getPostsList = async (startsWith: string): Promise<void> => {
    try {
      this.loading = true;

      const characters = await api.characters.getCharacterList(startsWith);

      runInAction(() => {
        this.characters = [];
        this.characters = characters.map((item) => ({
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
    
        }));
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
  getPostsListWithOffset = async (offset: number, limit: number, startsWith: string): Promise<void> => {
    try {
      this.loading = true;

      const characters = await api.characters.getCharacterListWithOffset(offset, limit, startsWith);

      runInAction(() => {
        let memoChar: DisplayInterface[] = []
        memoChar = characters.map((item) => ({
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
    
        }));

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
        
     
      


      runInAction(() => {
         this.character.id = character.id
         this.character.name = character.name 
         this.character.description = character.description 
         this.character.thumbnail = character.thumbnail
         this.character.dataList.items = character.comics.items.map((item) => ( { 
          
            resourceURI: item.resourceURI,
            name: item.name

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
