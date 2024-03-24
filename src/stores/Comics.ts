import { observable, action, makeObservable, runInAction } from "mobx";

// API
import api from "../api";

// Types
import { descriptionProps } from "../types/descriptionProps";
import { DisplayInterface } from "../types/DisplayInterface";

class ComicsStore {
  @observable
  comics: DisplayInterface[] = [];

  @observable 
  comic: descriptionProps = {id: 0, name:"", isChar:false, description:"", thumbnail: { path:"", extension: ""}, dataList: { items:[] } }

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
          comicsList: []
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
         this.comic.id = comic.id;
         this.comic.name = comic.title
         this.comic.description = comic.description
         this.comic.thumbnail = comic.thumbnail

         this.comic.dataList.items = comic.characters.items.map((item) => ( { 
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


const comicsStore = new ComicsStore();

export default comicsStore;
