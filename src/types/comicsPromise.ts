export interface ComicsPromise {
    id: number;
    title: string;
    isChar: boolean;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
  }