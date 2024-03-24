import axios from './helpers/axios';
import CryptoJS from 'crypto-js'
import { Character } from '../types/character';
export default {
    async getCharacterList(): Promise<Character[]> {
        const ts = new Date().getTime.toString();
        const apiKey: string = "8d372a93d6528044c4eacae18e416d40"
        const response = await axios.get("http://gateway.marvel.com/v1/public/characters",  { 
          params:  {
            ts: ts,
            apikey: apiKey,
            hash: CryptoJS.MD5(ts.concat("3c423dce80b2b66cc204f0e99382177edd78a150").concat(apiKey)),
            limit: 100
          }
      });

      return response.data.data.results;
    },

    async getCharacterListWithOffset(offset: number): Promise<Character[]> {
      const ts = new Date().getTime.toString();
      const apiKey: string = "8d372a93d6528044c4eacae18e416d40"
      const response = await axios.get("http://gateway.marvel.com/v1/public/characters",  { 
        params:  {
          ts: ts,
          apikey: apiKey,
          hash: CryptoJS.MD5(ts.concat("3c423dce80b2b66cc204f0e99382177edd78a150").concat(apiKey)),
          limit: 20,
          offset: offset
        
        }
    });

    return response.data.data.results;
  },
  
    async getCharacter(postId: number): Promise<Character> {
      const ts = new Date().getTime.toString();
        const apiKey: string = "8d372a93d6528044c4eacae18e416d40"
        const response = await axios.get(`http://gateway.marvel.com/v1/public/characters/${postId}`,  { 
          params:  {
            ts: ts,
            apikey: apiKey,
            hash: CryptoJS.MD5(ts.concat("3c423dce80b2b66cc204f0e99382177edd78a150").concat(apiKey))
          }
      });
     
      return response.data.data.results[0];
    },

    



  };