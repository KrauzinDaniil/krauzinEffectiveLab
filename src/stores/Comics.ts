import { observable, action, makeObservable, runInAction, computed } from "mobx";

// API
import api from "../api";

// Types
import { DescriptionProps } from "../types/descriptionProps";
import { DisplayInterface } from "../types/DisplayInterface";

class ComicsStore {
  @observable
  comics: DisplayInterface[] = [];

  @observable 
  comic: DescriptionProps | null = null;

  @observable
  loading: boolean = false;

  @observable
  initialLoading: boolean = false;

  @observable
  totalComics: number = 0;

  @observable
  loadedAlready: number = 1;  

  constructor() {
    makeObservable(this);
  }
  
  

  @computed 
  get totalPageNumber():number { 
       return Math.ceil(this.totalComics / 25) 
  }  
 



  @action
  getComicsList = async (startsWith: string): Promise<void> => {
    try {
      this.initialLoading = true;

      const comics = await api.comics.getComicsList(startsWith);
      this.loadedAlready = 1; 
      runInAction(() => {
      
        this.comics = []
        this.comics = comics.results.map((item) => ({
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
          data: { 
            items: item.characters.items
          },
          isFavourited: false
        }))

        this.totalComics = comics.total;
        
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.initialLoading = false;
      });
    }
  };
  @action
  getComicsListWithOffset = async (startsWith:string): Promise<void> => {
    try {
      this.loading = true;

      const comics = await api.comics.getComicsListWithOffset(this.loadedAlready * 24, startsWith);
      this.loadedAlready+=1;
      runInAction(() => {
        let memoChar: DisplayInterface[] = []
        memoChar = comics.results.map((item) => ({
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
          data: { 
            items: item.characters.items
          },
          isFavourited: false
          
    
        }));
        this.totalComics = comics.total;
        this.comics.push(...memoChar);
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
        this.comic = {
          id: comic.id,
          name: comic.title,
          description: comic.description,
          thumbnail: comic.thumbnail,
          isChar: false,
          dataList: { items: [] },
          isFavourited: false
        };
        this.comic.dataList.items = comic.characters.items.map((item) => ({
          resourceURI: item.resourceURI,
          name: item.name,
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
}


const comicsStore = new ComicsStore();

export default comicsStore;
