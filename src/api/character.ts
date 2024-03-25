import axios from "./helpers/axios";
import CryptoJS from "crypto-js";
import { Character } from "../types/character";
import envs from "../config/enviroments";
export default {
  async getCharacterList(startsWith: string): Promise<Character[]> {
    const ts = new Date().getTime.toString();
    let response;
    if (startsWith === "") {
      response = await axios.get("/v1/public/characters", {
        params: {
          ts: ts,
          hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
          limit: 100,
        },
      });
    } else {
      response = await axios.get("/v1/public/characters", {
        params: {
          ts: ts,

          hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
          limit: 100,
          nameStartsWith: startsWith,
        },
      });
    }
    return response.data.data.results;
  },

  async getCharacterListWithOffset(
    offset: number,
    limit: number,
    startsWith: string
  ): Promise<Character[]> {
    const ts = new Date().getTime.toString();

    let response;
    if (startsWith === "") {
      response = await axios.get("/v1/public/characters", {
        params: {
          ts: ts,

          hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
          limit: limit,
          offset: offset,
        },
      });
    } else {
      response = await axios.get("/v1/public/characters", {
        params: {
          ts: ts,

          hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
          limit: limit,
          offset: offset,
          nameStartsWith: startsWith,
        },
      });
    }
    return response.data.data.results;
  },

  async getCharacter(postId: number): Promise<Character> {
    const ts = new Date().getTime.toString();

    const response = await axios.get(`/v1/public/characters/${postId}`, {
      params: {
        ts: ts,

        hash: CryptoJS.MD5(ts.concat(envs.privateKey).concat(envs.apiKey)),
      },
    });

    return response.data.data.results[0];
  },
};
