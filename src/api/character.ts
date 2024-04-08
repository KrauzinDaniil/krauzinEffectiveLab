import axios from "./helpers/axios";
import CryptoJS from "crypto-js";
import { Character } from "../types/character";
import { CharacterPromise } from "../types/characterPromise";
import envs from "../config/enviroments";
export default {
  async getCharacterList(startsWith: string): Promise<CharacterPromise> {
    const ts = Date.now().toString();

    const response = await axios.get("/v1/public/characters", {
      params: {
        ts: ts,
        hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
        limit: 25,
        nameStartsWith: startsWith ? startsWith : undefined,
      },
    });

    
    return response.data.data;
  },

  async getCharacterListWithOffset(
    offset: number,
    startsWith: string
  ): Promise<CharacterPromise> {
    const ts = Date.now().toString();

    const response = await axios.get("/v1/public/characters", {
      params: {
        ts: ts,
        hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
        limit: 25,
        offset: offset,
        nameStartsWith: startsWith ? startsWith : undefined,
      },
    });

    return response.data.data;

  },

  async getCharacter(postId: number): Promise<Character> {
    const ts = Date.now().toString();

    const response = await axios.get(`/v1/public/characters/${postId}`, {
      params: {
        ts: ts,

        hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
      },
    });

    return response.data.data.results[0];
  },
};
