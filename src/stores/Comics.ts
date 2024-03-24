import { observable, action, makeObservable, runInAction } from "mobx";

// API
import api from "../api";

// Types
import { Comics } from "../types/comics";

class ComicsStore {
  @observable
  comics: Comics[] = [];

  @observable 
  comic: Comics | undefined;

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getComicsList = async (): Promise<void> => {
    try {
      this.loading = true;

      const comics = await api.comics.getComicsList();

      runInAction(() => {
        this.comics = comics.map((item) => ({
          id: item.id,
          name: item.title,
          description: item.description,
          isChar: false,
          thumbnail: {
            path: item.thumbnail.path
              .concat("/landscape_incredible.")
              .concat(item.thumbnail.extension),
            extension: item.thumbnail.extension,
          },
          comics: []
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
  getComics = async (id: number): Promise<void> => {
    try {
      this.loading = true;

      const comic = await api.comics.getComic(id);


      runInAction(() => {
         this.comic = comic;
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


const comicsStore = new ComicsStore();

export default comicsStore;
