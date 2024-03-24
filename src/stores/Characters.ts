import { observable, action, makeObservable, runInAction } from "mobx";

// API
import api from "../api";

// Types
import { Character } from "../types/character";

class CharacterStore {
  @observable
  characters: Character[] = [];

  @observable
  loading: boolean = false;

  @observable
  character: Character | undefined; 

  constructor() {
    makeObservable(this);
  }

  @action
  getPostsList = async (): Promise<void> => {
    try {
      this.loading = true;

      const characters = await api.characters.getCharacterList();

      runInAction(() => {
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
          comics: [],
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
  getCharacterDetails  = async (id: number): Promise<void> => {
    try {
      this.loading = true;

      const character = await api.characters.getCharacter(id);
        
      console.log(character)


      runInAction(() => {
         this.character = character;
       
          
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
