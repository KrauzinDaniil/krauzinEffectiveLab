import axios from './helpers/axios';
import CryptoJS from 'crypto-js'
import { Comics } from '../types/comics';
import { ComicsPromise } from '../types/comicsPromise';


export default {
    async getComicsList(startsWith: string): Promise<ComicsPromise[]> {
      const ts = new Date().getTime.toString();
      const apiKey: string = "8d372a93d6528044c4eacae18e416d40"
      let response; 
      if(startsWith === "" ) { 
       response = await axios.get("http://gateway.marvel.com/v1/public/comics",  { 
          params:  {
            ts: ts,
            apikey: apiKey,
            hash: CryptoJS.MD5(ts.concat("3c423dce80b2b66cc204f0e99382177edd78a150").concat(apiKey)),
            limit: 100,
          
          }
      });
       }else {  
     
      response = await axios.get("http://gateway.marvel.com/v1/public/comics",  { 
        params:  {
          ts: ts,
          apikey: apiKey,
          hash: CryptoJS.MD5(ts.concat("3c423dce80b2b66cc204f0e99382177edd78a150").concat(apiKey)),
          limit: 100,
          titleStartsWith: startsWith
        }
    });
  }
    return response.data.data.results;
  },

    async getComicsListWithOffset(offset: number, limit: number, startsWith: string): Promise<ComicsPromise[]> {
      const ts = new Date().getTime.toString();
      const apiKey: string = "8d372a93d6528044c4eacae18e416d40"
      let response;
      if(startsWith === "") { 
        response = await axios.get("http://gateway.marvel.com/v1/public/comics",  { 
        params:  {
          ts: ts,
          apikey: apiKey,
          hash: CryptoJS.MD5(ts.concat("3c423dce80b2b66cc204f0e99382177edd78a150").concat(apiKey)),
          limit: limit,
          offset: offset, 
        
        }
      });
    }
    else { 
        response = await axios.get("http://gateway.marvel.com/v1/public/comics",  { 
        params:  {
          ts: ts,
          apikey: apiKey,
          hash: CryptoJS.MD5(ts.concat("3c423dce80b2b66cc204f0e99382177edd78a150").concat(apiKey)),
          limit: limit,
          offset: offset, 
          titleStartsWith: startsWith
        
        }
    });
  }
    return response.data.data.results;
  },
    async getComic(postId: number): Promise<Comics> {
      const ts = new Date().getTime.toString();
      const apiKey: string = "8d372a93d6528044c4eacae18e416d40"
      const response = await axios.get(`http://gateway.marvel.com/v1/public/comics/${postId}`,  { 
        params:  {
          ts: ts,
          apikey: apiKey,
          hash: CryptoJS.MD5(ts.concat("3c423dce80b2b66cc204f0e99382177edd78a150").concat(apiKey))
        }
    });
  
      return response.data.data.results[0];
    }
  };